---
title: Event Listeners & Anonymous Functions
excerpt: As developers we probably work with event listeners most days. In this little article, I want to give you a quick tip for the next time you write one.
date: 2021-01-01
tags:
  - tip
  - snippet
  - javascript
---

## What are they?

An [event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) provides us with a way of hooking into events triggered by an `EventTarget` object. We can listen for a whole range of events, from `click` to `keyup`, to `load`... and many more.

When we register an event listener, it expects us to provide a callback function, for example:

```js
document.addEventListener('click', function(){
  console.log('I was clicked!');
})
```

This is great because it allows us to run our own code whenever an event is triggered. As you can see from the above snippet, we are using an anonymous function (a function without a name) as our callback, however, what I'm going to suggest in this tip, is **to instead use a named function**.

## Why named functions?

Anonymous functions have their uses, and the above snippet is perfectly reasonable, however, in my eyes, there is one major downside to this approach -- we can't remove the event listener.

This may not be an issue in this scenario, but often for performance we'll want to remove an event listener when it's no longer required. So, why can't we remove it? Well, in order to remove an event listener, the `document.removeEventListener('click', functionName)` method requires a reference to the original function, and when we're passing in an anonymous function, we don't have one.

Another benefit is reusability. We now have a function that we can re-use in multiple places, be it a `click`, `load`, or simply whenever we would like. It's much more flexible!

## So, how do we fix this?

Luckily for us, this is relatively simple to fix -- simply use a `function` declaration, for example:

```js
function showConsoleOnClick() {
  console.log('I was clicked!')
}
```

Once we've created our declaration, adding and removing it is a breeze!

```js
document.addEventListener('click', showConsoleOnClick);
document.removeEventListener('click', showConsoleOnClick);
```

It's important to note that, when passing in this function, we don't want to call it, hence, we are only passing in `showConsoleOnClick` and *not* `showConsoleOnClick()`. If we were to do this, the function would run immediately, and not when the event was fired.

I hope you found this tip useful. It's a relatively simple thing to do, but can often make your life much easier going forward.
