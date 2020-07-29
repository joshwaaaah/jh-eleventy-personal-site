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
