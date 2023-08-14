import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Book() {
  const [data, setData] = useState({ book: {} });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((result) => {
        setData({ book: result.data });
      });
  }, []);
 

  return (
    <>
      <img src={data.book.volumeInfo?.imageLinks.thumbnail} />
      <h1>{data.book.volumeInfo?.title}</h1>
      <h2>{data.book.volumeInfo?.authors}</h2>
      <p>{data.book.volumeInfo?.description}</p>
      <a href="{data.book.volumeInfo?.infoLink}">More Info</a>
    </>
  );
}

export default Book;
