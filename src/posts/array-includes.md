---
draft: false
title: Array.includes()
excerpt: As developers we're often working with arrays, and we're often tasked with determening whether a given value exists within an array -- let's take a quick look at how we do this.
date: 2021-12-28
tags:
  - snippet
  - javascript
---

`Array.prototype.includes()` is a method that exists on all variables of type `Array`. Using it is pretty simple, for example, let's say we have an array with the following values and we want to determine whether `2` exists in that array.

```js
const numbers = [1, 2, 3, 4, 5];

const hasTwo = numbers.includes(2);
```
