BookFinder
--------------------------------------------------------------------------------------------------------------------

BookFinder is a web application that allows users to search for books online. It fetches book data from external APIs and displays results in an organized manner, providing a smooth and interactive user experience.

FEATURES
--------------------------------------------------------------------------------------------------------------------

Search Books: Search for books by title, author, or ISBN.

Responsive UI: Works well on both desktop and mobile devices.

Dynamic Display: View results in grid or list format.

Book Details: See book title, author, cover image, and description.

Interactive Search: Real-time search suggestions while typing.


TECHONOLOGIES USED
--------------------------------------------------------------------------------------------------------------------

Frontend: HTML, CSS, JavaScript, React.js (with Vite)

API: Open Library API 

Hosting: CodeSandbox / Local deployment

USAGE
--------------------------------------------------------------------------------------------------------------------

1. Enter a keyword (book title, author, or ISBN) in the    search bar.

2. Click the Search button.

3. View results in Grid or List view using the toggle buttons.

4. Click on  "View Details" for more details of a paticular book you liked.


PROJECT STRUCTURE 
--------------------------------------------------------------------------------------------------------------------

book-finder/
  ├─ src/
  │  ├─ components/
  │  │  ├─ SearchBar.jsx
  │  │  ├─ BookCard.jsx
  │  │  ├─ BookGrid.jsx
  │  │  └─ Pagination.jsx
  │  ├─ hooks/
  │  │  └─ useBooks.js
  │  ├─ lib/
  │  │  └─ api.js
  │  ├─ styles/
  │  │  └─ app.css
  │  ├─ App.jsx
  │  └─ main.jsx
  ├─ index.html
  └─ package.json
  └──README.md

Explanation:

src/components/ → Reusable UI components like search bar, book card.

src/hooks/ → Components that represent different routes.

App.jsx & main.jsx → Main React app structure and entry point.

