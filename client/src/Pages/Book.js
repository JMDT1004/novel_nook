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
    <div class="container my-24 mx-auto md:px-6">

    <section class="mb-32">
      <div
        class="block rounded-lg bg-white  dark:bg-neutral-700">
        <div class="flex flex-wrap items-center">
          <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <img src={data.book.volumeInfo?.imageLinks.thumbnail} alt="book cover"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="mb-4 text-3xl font-bold">
                {data.book.volumeInfo?.title}
              </h2>
              <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                
              </p>
              <p class="mb-6 text-black dark:text-neutral-300 font-bold">
                {data.book.volumeInfo?.authors}
              </p>
              <p class="text-black dark:text-neutral-300">
                {data.book.volumeInfo?.description}
              </p>
              {/* <a href={data.book.volumeInfo?.infoLink}>More Info</a> */}
              <a href={data.book.volumeInfo?.infoLink} className="text-xl text-blue-700"
                >More Info</a>
              {props.state.user && (
          <button onClick={addToFavorites}>Add to Favorites</button>
        )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  
  </div>
  );
}

export default Book;




{/* <>
      <img src={data.book.volumeInfo?.imageLinks.thumbnail} />
      <h1>{data.book.volumeInfo?.title}</h1>
      <h2>{data.book.volumeInfo?.authors}</h2>
      <p>{data.book.volumeInfo?.description}</p>
      <a href="{data.book.volumeInfo?.infoLink}">More Info</a>
      {props.state.user && (
        <button onClick={addToFavorites}>Add to Favorites</button>
      )}
    </> */}