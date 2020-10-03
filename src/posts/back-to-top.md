---
title: Creating an accessible 'back to top' button
excerpt: Today I want to write a quick snippet which will hopefully help someone, anyone, create a nice 'n easy 'Back to top' button. Let's dive in!
tags:
  - snippet
  - accessibility
---

## The HTML

The markup for our back to top button is relatively simple and concise. We are using a link tag (`<a>`) for the main component, and inside, have an SVG icon and some text, illustrating what clicking the link will do.

You will also notice the custom data attribute on the link tag. This is a common pattern for me *personally*, and is how I target the link in JavaScript, however there are many other ways of doing this if you so desire.

Finally, we have added an `aria-hidden` attribute to the SVG icon. The icon is useful visually, but provides no additional context otherwise and will only add audio clutter when navigating the component using assistive technology, like Voice Over, or JAWS.

```html
<a href="#top" data-js-hook="back-to-top-button">
  <svg aria-hidden="true" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
  <span>Back to top</span>
</a>
```

A common 'gotcha' when building this type of component is building it using only an icon, for example:

```html
<a href="#top">
  <svg fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
</a>
```

The issue with this is that, were a screen reader to focus on the element it wouldn't be clear what the action of the link is. There are a few ways of fixing this. The most simple? Add some text!

That's not always possible though, often, for design-related reasons. Not to worry, we can solve this by displaying content just to screen readers.
[Hiding content for screen readers](https://webaim.org/techniques/css/invisiblecontent/) can be achieved in numerous ways,
however my preferred method is using a utility class, often named `.visually-hidden` or `.sr-only`. For example:

```css
.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

## Now for some JavaScript

One often forgotten aspect of a back to top button is that, although visually the user
is able to see the page moving back to the top, somebody using a screen reader will not. As a result of this,
we have stored a [list of all focusable elements](https://gist.github.com/jamiewilson/c3043f8c818b6b0ccffd) on the page, and
upon clicking the back to top button, we restore focus to the first focusable element.

Accessibility aside, we are also making use of the browser's native [`scrollTo`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) method.
This method has pretty good support across the board, however the `options` object does not. As
a result, we've got a nice little check for browser support, and, in browsers that support 'smooth' scroll,
we scroll smoothly, in browsers that don't, we simply jump to the top.

```js
/**
 * The link that triggers the
 * back to top behaviour.
 * @type {HTMLElement}
 */
const backToTopButton = document.querySelector('[data-js-hook="back-to-top-button"]');

/**
 * A list of all focusable elements
 * on the page.
 * @type {NodeList}
 */
const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');

/**
 * The options used in the native
 * scrollTo method.
 * @type {Object}
 */
const scrollOptions = {
  top: 0,
  left: 0,
  behavior: 'smooth'
};

/**
 * Whether the device supports
 * smooth scroll, or not.
 * @type {Boolean}
 */
const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

/**
 * Handles moving the user back to the
 * top of the document.
 * @param event the event object passed in when
 * clicking on the button / link.
 */
function moveToTop(event) {
  event.preventDefault();

  // Scroll to top.
  supportsNativeSmoothScroll ? window.scrollTo(scrollOptions) : window.scrollTo(scrollOptions.left, scrollOptions.top);

  // Focus the first focusable element.
  focusableElements[0].focus({
    preventScroll: true,
  })
}

backToTopButton.addEventListener('click', moveToTop);
```

I hope you found this little snippet useful. As with most things, creating it is only the first step,
taking into account accessibility is another - but always, worthwhile.