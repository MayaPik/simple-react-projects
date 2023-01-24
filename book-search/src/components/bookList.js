import BookCard from "./bookCard";

export default function bookList(books, order) {
  let sortedBooks;
  if (order === "new") {
    sortedBooks = books?.sort((a, b) =>
      b.volumeInfo.publishedDate > a.volumeInfo.publishedDate ? 1 : -1
    );
  } else {
    sortedBooks = books?.sort((a, b) =>
      a.volumeInfo.publishedDate > b.volumeInfo.publishedDate ? 1 : -1
    );
  }

  return (
    <div>
      {books ? (
        <div className="books">{sortedBooks.map((book) => BookCard(book))}</div>
      ) : null}
    </div>
  );
}
