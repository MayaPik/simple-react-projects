import { Card, CardContent, Typography } from "@mui/material";

export default function BookCard(book) {
  return (
    <>
      <Card
        sx={{
          width: 300,
          border: "black solid 1px",
          margin: 3,
          height: 400,
        }}
        key={book.id}
      >
        <CardContent>
          {book.volumeInfo.imageLinks && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          )}

          <Typography sx={{ fontSize: 22 }} color="text.secondary">
            Title: {book.volumeInfo.title}
          </Typography>
          {book.volumeInfo.authors && (
            <Typography variant="h6" component="div">
              Author: {book.volumeInfo.authors}
            </Typography>
          )}
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Published: {book.volumeInfo.publishedDate}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
