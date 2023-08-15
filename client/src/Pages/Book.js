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
    <div className="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32">
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className=" shrink-2 grow-2 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img id="bookCover" src={data.book.volumeInfo?.imageLinks.thumbnail} alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-4 text-2xl font-bold">
            {data.book.volumeInfo?.title}
            </h2>
            <p className="mb-6 text-black dark:text-neutral-300">
            {data.book.volumeInfo?.authors}
            </p>
            <p className="text-black dark:text-neutral-300">
            {data.book.volumeInfo?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
      
    </>
  );
}

export default Book;
