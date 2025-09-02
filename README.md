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

SCREENSHORTS OUTPUT 
--------------------------------------------------------------------------------------------------------------------
<img width="1920" height="1080" alt="Screenshot 2025-09-02 231526" src="https://github.com/user-attachments/assets/6331eb80-514d-444c-881e-9782a47baa37" />

<img width="1920" height="1080" alt="Screenshot 2025-09-02 231601" src="https://github.com/user-attachments/assets/6af5625d-bacd-49d0-908d-732620056816" />

<img width="1920" height="1080" alt="Screenshot 2025-09-02 231612" src="https://github.com/user-attachments/assets/9361ae69-3591-4681-93ff-be6f04e7ea02" />


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

