---
title: Accessible accordions
excerpt: An accordion is probably one of the most used components across the Web and provides a simple way of expanding and hiding content. It's often found on FAQ pages, or with content that's a little too unweiedly to be shown at all times. Let's take a look at how to create one!
tags:
  - tutorial
  - accessibility
---

## The Markup

There are two main parts to creating the HTML for an accordion component; the button that toggles (opens and closes) the content, and the content itself. Let's take a look below.

```html
<button aria-expanded="false" data-js-hook="accordion-button">
  Making an accessible accordion
</button>

<div>
  <p>Hello, I am some content from inside of an accordion
  component</p>
</div>
```

One of the fundamental things to note here -- and it may sound obvious -- is that we are using `<button>`. A `<button>` brings with it a few characteristics that other tags may not, for example:

- It will have a default 'role' of button.
- It will be focusable by default, and so is accessible to keyboard users.
- A 'click' event can be triggered by clicking, hitting the 'Enter' key, or the 'Space' key.

Another important thing to note here is the `aria-expanded` attribute. This attribute is used to indicate that there is expandable content, and its state (whether it is expanded or collapsed). The two values that this attribute can accept are `true` and `false`. We will update these values when we add our JavaScript into the mix!

Finally, you may have noticed the custom [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) on the button. I'm using this so I can target the element from my JavaScript, however you could just as easily use a class and target it that way. I prefer to separate my concerns, and using data attributes maintains a nice divide between my style (classes) and my JavaScript (data attributes), however it's very much down to personal preference.

## The JavaScript

An accordion is a relatively simple component, and in terms of functionality, requires only the ability to open, and close. To do this, we must first target our `<button>` and accordion content. We can do this using the [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method.

```js
const accordionButton = document.querySelector('[data-js-hook="accordion-button"]');
```

Now we've got a reference to our button, we should create a couple of functions to handle the opening and closing of our content. First, lets handle toggling the `aria-expanded` attribute.

```js
/**
 * Handles opening and closing the accordion.
 *
 * @param {HTMLElement} element - The element which we will toggle the aria-expanded attribute on.
 * @return {Void}
 */
function toggleAriaExpanded(element) {
  /**
   * Whether the accordion content is expanded or not.
   * @type {Boolean}
   */
  const isExpanded = element.getAttribute('aria-expanded');

  /**
   * Toggle the 'aria-expanded' attribute.
   */
  if(isExpanded === true) {
    element.setAttribute('aria-expanded', false);
  } else {
    element.setAttribute('aria-expanded', true);
  }
}
```
Next, we need to be able to create a function which is responsible for showing and hiding the content. Let's create that function!

```js
/**
 * Toggles an HTML element's display property.
 *
 * @param {HTMLElement} elementToToggle  - The element of which to toggle the display property.
 * @return {Void}
 */
function toggleContentVisibility(elementToToggle) {
  if (window.getComputedStyle(elementToToggle).display === 'block') {
    elementToToggle.style.display = 'none';
  } else {
    elementToToggle.style.display = 'block';
  }
}
```
Now we've got our functions, we just need to tie it all together, ensuring that on click of our accordion button our functions are invoked.

```js
/**
 * This is fired on 'click' of the accordion button.
 *
 * @param {Object} event  - The event triggered on 'click'.
 * @return {Void}
 */
function toggleAccordionContent(event) {
  /**
   * The <button> that triggered the event.
   * @type {HTMLElement}
   */
  const accordionBtn = e.currentTarget;
  /**
   * The content that is expanded / collapsed
   * @type {HTMLElement}
   */
  const accordionContent = accordionBtn.nextSibling;

  toggleAriaExpanded(accordionBtn);
  toggleContentVisibility(accordionContent);
}

/**
 * Attach the event handler to the accordion button.
 */
accordionButton.addEventListener('click', toggleAccordionContent);
```

That's it! I hope you've found this tutorial useful. If you have, give it a share -- it's much appreciated.