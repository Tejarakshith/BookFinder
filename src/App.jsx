import { useState } from "react";
import SearchBar from "./components/SearchBar";

import "./styles/app.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // new: track current view
  const [view, setView] = useState("grid"); // "grid" or "list"

  // new: track if user clicked Search
  const [hasSearched, setHasSearched] = useState(false);

  const fetchBooks = async () => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(true);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setHasSearched(true);

      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
        query
      )}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

      const data = await response.json();
      const mapped = (data.docs || []).slice(0, 20).map((doc) => ({
        key: doc.key,
        title: doc.title,
        authors: doc.author_name || ["Unknown author"],
        year: doc.first_publish_year || "N/A",
        coverId: doc.cover_i,
      }));

      setResults(mapped);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Book Finder</h1>
        <p>Search millions of books And ENJOY READING</p>
      </header>

      {/* Search Bar */}
      <SearchBar value={query} onChange={setQuery} onSubmit={fetchBooks} />

      {/* Show toggle buttons only after search is clicked */}
      {results.length > 0 && (
        <div className="view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            Grid View
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            List View
          </button>
        </div>
      )}

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">❌ {error}</p>}

      <main>
        {!loading && !error && results.length === 0 && hasSearched && (
          <p className="status">No results found.</p>
        )}

        <ul className={`results ${view}`}>
          {results.map((book) => {
            const cover = book.coverId
              ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
              : null;

            return (
              <li key={book.key} className="result-card">
                {cover ? (
                  <img
                    src={cover}
                    alt={`Cover of ${book.title}`}
                    loading="lazy"
                    className="cover"
                  />
                ) : (
                  <div className="cover-fallback">No cover</div>
                )}
                <div className="info">
                  <h3>{book.title}</h3>
                  <p>
                    {book.authors.join(", ")} ({book.year})
                  </p>
                  <a
                    href={`https://openlibrary.org${book.key}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Details →
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
