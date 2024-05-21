# JAVASCRIPT PRACTICE

## OVERVIEW

- This document provides requirements, technical stack, and estimation for JavaScript Practice.

## TIMELINE

- 121.5 hours (2024/05/04 - 2024/05/28)

## TEAM SIZE

- One developer.

## TARGET

- Understand and apply knowledge of HTML5, CSS3, JavaScript (with ES6 syntax).
- DOM manipulation and form validation.
- Understand how asynchronous code work and apply it in practice (API call or any place we can as mock API in code).
- Get familiar with DevTools.

## TECHNICAL STACK

- HTML5/CSS3/JavaScript (with ES6 syntax)
- MockAPI
- Web Bundler: Parcel
- Vercel
- Prettier
- Eslint

## TOOLS

- Visual Studio Code

## DESIGN

- Design: [figma](https://www.figma.com/file/lUFBT5Xi1SPPuDBCnXPd5q/Product-Management?type=design&node-id=0-1&mode=design&t=Q9nNngX2QjAOHZTS-0).

## TASK MANAGEMENT

- [Trello](https://trello.com/b/8u43DOmI/javascript-training)

## REQUIREMENTS

- Build a website products management.
- Responsive (Mobile, Tablet, Desktop)
  - Mobile first (min-width: 576px)
  - Tablet (min-width: 768px)
  - Desktop (min-width: 1352px)
- Cross-browser testing (MS Edge, Chrome, Firefox latest version)
  - MS Edge: 44.17763.1.0
  - Chrome: 121.0.6167.185
  - Firefox: 122.0.1
- Follow the design and implement the features below:
  - User can view all products on the home page with basic info such as image, name, price, quantity
    - User can see the text **_No result data_** if there are no products available
  - User can add a new product with name, price, image, quantity and all these fields are required
    - Display an error message when the user creates a new product with an invalid value
    - Display a message when the user submits the form successfully/failed
  - User can edit a product with name, price, image, quantity and all these fields are required
    - Display an error message when the user edits a product with an invalid value
    - Display a message when the user submits the form successfully/failed
  - User can delete a product
    - Display modal to confirm before deleting
    - Display a message when the user deleted successfully/failed
  - User can sort products by name or price
    - Display a message when users sort failed
    - Displays a list of all products when the user successfully sorts
  - User can search products by name
    - Display a message when users search failed
    - Displays a list of all related products when the user searches successfully

## GETTING STARTED

- Clone the repository

```bash
git clone https://github.com/JennyDoJD/javascript-training.git
```

- Move to the cloned repository folder

```bash
cd javascript-training
```
