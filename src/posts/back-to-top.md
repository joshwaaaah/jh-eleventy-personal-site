---
title: Creating a accessible 'back to top' button
excerpt: Today I want to write a quick snippet which will hopefully help someone, anyone, create a nice 'n easy 'Back to top' button. Let's dive in!
tags:
  - snippet
  - accessibility
---

## Let's go!

Back to top buttons are quite common, and useful, components used across the Web, but they're easy to get wrong if you're not thinking about accessibility.

## A sprinkle of HTML

The markup for our 'back to top' button consists of a couple of things, firstly, we're using an `<a>` tag for our button. Inside of that we have an icon, and some text.

Often you'll see a 'back to top' button without text, and only an icon. This is an issue. To fix this, it's relatively simple: add some text! If you don't want the text to be visible then there are various ways to do this, however one approach I like to use is utilising a 'screen-reader' only class.

```css
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
```
This class is mega useful when building accessible sites. Essentially, it allows you to display content to screen readers, whilst hiding it visually. That way, you can keep both your designer happy, and the accessibility experts!

There are other techniques that you can use to achieve similar results, a [great resource for hiding content visually is the WebAIM site.](https://webaim.org/techniques/css/invisiblecontent/)

```html
<a href="#top" data-js-hook="back-to-top-button">
  <svg aria-hidden="true" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
  <span class="group-hover:underline">Back to top</span>
</a>
```

## Now for some JavaScript

The JavaScript code below is responsible for both scrolling the page to the top, but also, and often forgotten, it moves the `document.activeElement`, or focus.

Moving focus is often a forgotten part of the 'back to top' button, however it is really important. For visual users, it's quite clear that the page has moved position, however for visually-impaired users, or people using assistive technology, it may not be.

To resolve this, we're storing a list of all focusable elements on the page, and, upon scroll, we are resetting the focus back to the first focusable element.

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
  top: 100,
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