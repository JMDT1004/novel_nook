import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Book(props) {
  const [data, setData] = useState({ book: {} });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((result) => {
        setData({ book: result.data });
      });
  }, []);

  async function addToFavorites(){
    await axios.post('/api/favorites', {
        bookId: data.book.id,
        image: data.book.volumeInfo.imageLinks.thumbnail,
        title: data.book.volumeInfo.title,

    });
    navigate('/dashboard');
  }

  return (
    <>
      <img src={data.book.volumeInfo?.imageLinks.thumbnail} />
      <h1>{data.book.volumeInfo?.title}</h1>
      <h2>{data.book.volumeInfo?.authors}</h2>
      <p>{data.book.volumeInfo?.description}</p>
      <a href="{data.book.volumeInfo?.infoLink}">More Info</a>
      {props.state.user && (
        <button onClick={addToFavorites}>Add to Favorites</button>
      )}
    </>
  );
}

export default Book;
