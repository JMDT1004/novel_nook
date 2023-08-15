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

  async function addToFavorites() {
   const {data :{user}} = await axios.post("/api/favorites", {
      bookId: data.book.id,
      image: data.book.volumeInfo.imageLinks.thumbnail,
      title: data.book.volumeInfo.title,
      user: props.state.user._id
    });

    
   


    props.setState({ ...props.state, user : {...user} });

    
    navigate("/dashboard");
  }

  return (
    <div className="container my-24 mx-auto md:px-6">

    <section className="mb-32">
      <div
        className="block rounded-lg bg-white  dark:bg-neutral-700">
        <div className="flex flex-wrap items-center">
          <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <img src={data.book.volumeInfo?.imageLinks.thumbnail} alt="book cover"
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-4 text-3xl font-bold">
                {data.book.volumeInfo?.title}
              </h2>
              <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                
              </p>
              <p className="mb-6 text-black dark:text-neutral-300 font-bold">
                {data.book.volumeInfo?.authors}
              </p>
              <p className="text-black dark:text-neutral-300">
                {data.book.volumeInfo?.description}
              </p>
              <br />
              {/* <a href={data.book.volumeInfo?.infoLink}>More Info</a> */}
              <a href={data.book.volumeInfo?.infoLink} className="text-xl text-blue-700"
                >More Info</a>
                <br />
                <br />
              {props.state.user ? (
        <button className="bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" onClick={addToFavorites}>Add to Favorites</button>
      ) : <p><a href="/login">Login to add to favorites</a></p>}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  
  </div>
  );
}

export default Book;
