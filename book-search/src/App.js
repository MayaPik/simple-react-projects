import { useState, useEffect } from "react";
import getBooks from "./getBooks";
import bookList from "./components/bookList";
import header from "./components/header";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [input, setInput] = useState(null);
  const [order, setOrder] = useState("new");

  useEffect(() => {
    if (input !== null)
      getBooks(input)
        .then((result) => setBooks(result))
        .catch((error) => setError(error));
  }, [input]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      {header()}
      <div className="searchBar">
        <input type={"text"} onChange={handleChange} />
        <select onChange={(e) => handleOrder(e)}>
          <option value="new">From Newest to Oldest</option>
          <option value="old">From Oldest to Newest</option>
        </select>
      </div>
      {bookList(books, order)}
    </div>
  );
}
