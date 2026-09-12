# DevStack Builder

**Author: MD Shafayetzaman**

## About The Project

DevStack Builder is a modern React web application that helps users explore different technologies and build their own development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- HTML
- CSS
- JavaScript

## Features

1. **Explore Technologies**
   Users can browse different technologies with their category, difficulty, rating, and description.

2. **Build Your Stack**
   Users can add technologies to their personal stack and see the selected technologies in the sidebar.

3. **Manage Your Stack**
   Users can remove individual technologies or remove all selected technologies at once.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores and updates data inside a React component. I used it in `App.tsx` to store the selected technology stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. It can be used to fetch data from an API or JSON file. In this project, the JSON data is loaded using `fetch`.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to update the correct item efficiently when the list changes.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it for the empty stack message:

```tsx
{stack.length === 0 ? (
  <p>Nothing here yet. Add a technology to start building your stack.</p>
) : (
  <StackItems />
)}
