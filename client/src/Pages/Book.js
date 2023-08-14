import axios from "axios";
import { BookCard } from "../components/Bookcard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Book() {
  const [data, setData] = useState({ book: {} });
  const { id } = useParams();
  useEffect(() => {
    axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    ).then((result) => {
      console.log(result.data);
      setData({ book: result.data });
    });
    
    
  }, []);
  // console.log(data)
  return (
    <>
      <h1>Book</h1>

      {data.book && <p>{JSON.stringify(data.book.volumeInfo, null, 2)}</p>}
    </>
  );
}

export default Book;
