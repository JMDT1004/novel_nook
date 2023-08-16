import { useEffect, useState } from "react";
import axios from "axios";
function Landing() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get("/api/favorites").then((res) => {
      setFavorites(res.data.favorites);
    });
  }, []);
  console.log(favorites);
  return (
    <>
      <div id="mainBanner" className="pt-10 flex justify-center ">
        <img
          src="https://images.booksamillion.com/content/images/68cbb931b3481d22f34ba0ae14a81423.gif"
          alt="50% off Hundreds of Books! Shop Now"
        />
      </div>

      <div>
        <div className="container my-24 mx-auto md:px-6">
          <section id="best" className="mb-10 text-center  ">
            <div className=" max-width ">
              <div className=" ">
                <h2 id="bestSellers" className="mb-6  text-3xl font-bold">
                  See What Others Are Reading
                </h2>
                <hr className="my-custom-line"></hr>
                <div className="grid grid-cols-4 gap-4">
                  {favorites.map((favorite) => (
                    <div key={favorite._id} className="p-2 border rounded-lg">
                      <a
                        className="block mb-2"
                        href={"/book/" + favorite.bookId}
                      >
                        <img
                          className="object-cover  w-full mx-auto mb-2"
                          src={favorite.image}
                        />
                      </a>
                      <h3 className="text-sm font-semibold mb-1">
                        {favorite.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        Liked by: {favorite.user?.username}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div
            id="promo"
            className="w-full pt-5 pb-5 flex justify-center border-gray-400  border-t-2 border "
          >
            <a href="/book/JVZdzwEACAAJ">
              <img
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/42648c51-12df-465d-845a-1886a807985d.__CR0,0,970,300_PT0_SX970_V1___.jpg"
                alt="promo book"
              />
            </a>
          </div>

          {/* <!-- Section: Design Block --> */}
          <section id="best" className="mb-10 text-center  ">
            <div className=" max-width ">
              <div className="mt-16 ">
                <h2 id="bestSellers" className="mb-6  text-3xl font-bold">
                  BestSellers
                </h2>
                <hr className="my-custom-line"></hr>
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/jfSn2RJZI9EC">
                      <img
                        src="http://books.google.com/books/content?id=jfSn2RJZI9EC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="American Prometheus cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      American Prometheus
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): Kai Bird, Martin J. Sherwin
                    </p>
                  </div>

                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/fPdQDwAAQBAJ">
                      <img
                        src="http://books.google.com/books/content?id=fPdQDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="Killers of the Flower Moon cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      Killers of the Flower Moon
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): David Grann
                    </p>
                  </div>

                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/Ayk3EAAAQBAJ">
                      <img
                        src="http://books.google.com/books/content?id=Ayk3EAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="Lessons in Chemistry cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      Lessons in Chemistry
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): Bonnie Garmus
                    </p>
                  </div>

                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/wmnuDwAAQBAJ">
                      <img
                        src="http://books.google.com/books/content?id=wmnuDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="It Ends with Us cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      It Ends with Us
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): Colleen Hoover
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32 text-center md:text-left">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Latest articles
              </h2>
              <hr className="my-custom-line mb-2"></hr>

              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:mb-0">
                  <div
                    className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://media.npr.org/assets/img/2023/07/10/npr-summer-rec_islenia-mil_custom-360542210021943eec06f19ecc9c9c4e6f9b60ca-s800-c85.webp"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="https://www.npr.org/2023/07/17/1186007897/what-to-read-summer-books">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Some books are made for summer. NPR staffers share their
                    all-time favorites
                  </h3>

                  <p className="mb-6 text-black  dark:text-neutral-300">
                    <small>
                      Published <u>July 17, 2023</u> by
                      <a> NPR Staff</a>
                    </small>
                  </p>
                  <p className="text-black dark:text-neutral-300">
                    A few weeks ago, we asked NPR staffers to share their
                    all-time favorite summer reads. Old, new, fiction,
                    nonfiction — as long as it was great to read by a pool or on
                    a plane, it was fair game. Scroll down to find
                    tried-and-true recommendations for mysteries, memoirs,
                    essays and, of course, romance.
                  </p>
                </div>
              </div>

              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:order-2 md:mb-0">
                  <div
                    className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://media.npr.org/assets/img/2023/08/14/heavenearth_custom-465519dc04c65a025605ecd8c432a1c1012d245c-s300-c85.webp"
                      className="w-50 h-50 pl-20"
                      alt="Louvre"
                    />
                    <a href="https://www.npr.org/2023/08/14/1188327549/james-mcbride-heaven-earth-grocery-store-review">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>

                <div className="md:order-1">
                  <h3 className="mb-3 text-black text-2xl font-bold">
                    James McBride's 'Heaven & Earth' is an all-American mix of
                    prejudice and hope
                  </h3>

                  <p className="mb-6 text-black dark:text-neutral-300">
                    <small>
                      Published <u>August 14, 2023</u> by
                      <a href="https://www.npr.org/people/4529709/maureen-corrigan">
                        {" "}
                        Maureen Corrigan
                      </a>
                    </small>
                  </p>
                  <p className="text-black dark:text-neutral-300">
                    I don't often begin reviews talking about the very last
                    pages of a book, but an uncommon novel calls for an uncommon
                    approach. In the Acknowledgements at the end of his new
                    novel, The Heaven & Earth Grocery Store, James McBride cites
                    as his inspiration a camp outside Philadelphia where he
                    worked every summer as a college student during the 1970s.
                    At the time, it was called The Variety Club Camp for
                    Handicapped Children.
                  </p>
                </div>
              </div>

              <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:mb-0">
                  <div
                    className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://media.npr.org/assets/img/2023/08/09/pulling-the-chariot-of-the-sun-9781668021743_hr-1-_custom-9861b9281941b7b5a302e5cfece2d6ff1214810b-s300-c85.webp"
                      className="w-50 h-50 pl-20"
                      alt="Louvre"
                    />
                    <a href="https://www.npr.org/2023/08/09/1192789607/shane-mccrae-pulling-the-chariot-of-the-sun">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    A poet pieces together an uncertain past in 'Memoir of a
                    Kidnapping'
                  </h3>

                  <p className="mb-6 text-black dark:text-neutral-300">
                    <small>
                      Published <u>August 9, 2023</u> by
                      <a href="https://www.npr.org/people/856763118/tonya-mosley">
                        Tonya Mosley
                      </a>
                    </small>
                  </p>
                  <p className="text-black dark:text-neutral-300">
                    Poet and author Shane McCrae says he was almost 4 years old
                    when he was kidnapped from his Black father in Oregon by his
                    maternal grandparents, who were white supremacists. "They
                    took me to Round Rock, Texas, which is a suburb of Austin,"
                    McCrae says. "And they told my mother that if she ever tried
                    to get custody of me — and, I also think, if she ever tried
                    to tell my father where I was — that she would never see me
                    again, they would disappear to Mexico."
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="mb-10 text-center ">
            <div className=" max-width ">
              <div className=" ">
                <h2 id="bestSellers" className="mb-6  text-3xl font-bold">
                  All Time Classics
                </h2>
                <hr className="my-custom-line"></hr>
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/3Cy7DwAAQBAJ">
                      <img
                        src="http://books.google.com/books/content?id=3Cy7DwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="Pride and Prejudice cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      Pride and Prejudice
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): Jane Austen
                    </p>
                  </div>

                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/ayJpGQeyxgkC">
                      <img
                        src="http://books.google.com/books/content?id=ayJpGQeyxgkC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="To Kill a Mockingbird 40th cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      To Kill a Mockingbird 40th
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): Harper Lee
                    </p>
                  </div>

                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/fIlQDwAAQBAJ">
                      <img
                        src="http://books.google.com/books/content?id=fIlQDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="The Great Gatsby cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">
                      The Great Gatsby
                    </h3>
                    <p className="text-xs text-gray-600">
                      Author(s): F. Scott Fitzgerald
                    </p>
                  </div>

                  <div className="p-2 border rounded-lg">
                    <a className="block mb-2" href="/book/IEXNpyrUiXAC">
                      <img
                        src="http://books.google.com/books/content?id=IEXNpyrUiXAC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api"
                        alt="Jane Eyre cover"
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <h3 className="text-sm font-semibold mb-1">Jane Eyre</h3>
                    <p className="text-xs text-gray-600">
                      Author(s): Charlotte Bronte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
      </div>
    </>
  );
}

export default Landing;
