export default function getBooks(input) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching books: ${response.statusText}`);
      }
      return response.json();
    })
    .then((result) => result.items)
    .catch((error) => {
      console.error(error);
      return null;
    });
}
