/**
 * The <body></body> of the site.
 * @type {HTMLElement}
 */
const body = document.body;

/**
 * Adds a class of 'is-tabbing' if the user
 * is using the keyboard.
 */
function setTabbingState(e) {
  const TAB_KEY = 9;

  if(e.which === TAB_KEY) {
    body.classList.add('is-tabbing');
  }
}

/**
 * Removes class of 'is-tabbing' if the user
 * is using a mouse.
 */
function removeTabbingState() {
  body.classList.remove('is-tabbing');
}

document.addEventListener('keydown', setTabbingState)
body.addEventListener('mousedown', removeTabbingState);
