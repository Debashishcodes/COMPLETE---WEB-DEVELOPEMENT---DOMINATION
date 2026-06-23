// DOM (Document Object Model)

// Before learning DOM Manipulation, first understand what DOM actually is.

// Imagine you have an HTML page:

// <!DOCTYPE html>
// <html>
// <head>
//     <title>My Website</title>
// </head>
// <body>
//     <h1>Hello World</h1>
//     <p>I am learning JavaScript</p>
// </body>
// </html>

// When the browser loads this page, it doesn't see it as plain text.

// It converts it into a tree-like structure:

// Document
// │
// └── html
//     │
//     ├── head
//     │   └── title
//     │
//     └── body
//         ├── h1
//         └── p

// This tree structure is called the DOM.

// Definition

// DOM (Document Object Model) is a programming interface that represents an HTML document as objects and allows JavaScript to access and modify HTML elements.

// Why DOM Exists?

// Without DOM:

// console.log("Hello");

// JavaScript can only work with variables and logic.

// With DOM:

// document.querySelector("h1");

// JavaScript can interact with the webpage itself.

// It can:

// Change text
// Change colors
// Add elements
// Remove elements
// Handle button clicks
// Create animations
// What is DOM Manipulation?

// DOM Manipulation means:

// Using JavaScript to access, modify, create, delete, or update HTML elements.

// Example:

// HTML

// <h1 id="heading">Hello</h1>

// JavaScript

// let h = document.getElementById("heading");

// h.innerText = "Hello Debashish";

// Before:

// Hello

// After:

// Hello Debashish

// JavaScript changed the webpage.

// This is DOM Manipulation.

// Real Life Example

// Suppose Instagram shows:

// ❤️ 10 Likes

// You click Like.

// JavaScript changes:

// ❤️ 11 Likes

// No page reload.

// That's DOM Manipulation.

// Most Important Object

// In DOM, the king is:

// document

// The browser automatically provides it.

// console.log(document);

// Output:

// #document

// document represents the entire webpage.

// Everything starts from document.

// DOM Roadmap (Learn in this order)
// 1. Selecting Elements ⭐
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()
// 2. Changing Content ⭐
// innerText
// innerHTML
// textContent
// 3. Changing CSS ⭐
// style
// classList
// 4. Attributes ⭐
// getAttribute()
// setAttribute()
// removeAttribute()
// 5. Creating Elements ⭐
// createElement()
// append()
// prepend()
// remove()
// 6. Event Handling ⭐⭐⭐
// click
// mouseover
// keydown
// submit

// Using:

// addEventListener()

// This is one of the most important topics in JS.

// Interview Definition

// DOM:
// A tree-like representation of an HTML document created by the browser, allowing JavaScript to access and manipulate webpage elements.

// DOM Manipulation:
// The process of using JavaScript to access, modify, add, remove, or update HTML elements dynamically.