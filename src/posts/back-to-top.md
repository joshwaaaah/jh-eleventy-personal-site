---
title: Creating a accessible 'back to top' button
excerpt: Today I want to write a quick snippet which will hopefully help someone, anyone, create a nice 'n easy 'Back to top' button. Let's dive in!
tags:
  - snippet
  - accessibility
---

## The HTML

```html
<a href="#top" data-js-hook="back-to-top-button">
  <svg aria-hidden="true" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
  <span class="group-hover:underline">Back to top</span>
</a>
```

## Now for some JavaScript

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
