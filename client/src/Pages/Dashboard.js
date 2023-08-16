import axios from "axios";

function Dashboard(props) {
  async function deleteFromFavorites(favoriteId) {
    try {
      await axios.delete(`/api/favorites/${favoriteId}`);
      
      const updatedFavorites = props.state.user.favorites.filter(
        favorite => favorite._id !== favoriteId
      );
      props.setState({
        user: {
          ...props.state.user,
          favorites: updatedFavorites
        }
      });
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  }
 
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Welcome, {props.state.user?.username}!</h2>
      <h3 className="text-xl font-bold text-center">Here are your favorite books:</h3>

      {!props.state.user?.favorites.length && (
        <p className="text-center">You haven't favorited any books yet!</p>
      )}

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
      {props.state.user?.favorites.map((favorite) => (
        <div className="bg-white h-full rounded-lg shadow-md p-4" key={favorite._id}>
          <div className="text-center flex items-center justify-center my-auto">
          <a href={`book/${favorite.bookId}`}>
            <img className="object-cover w-full mx-auto mb-2" alt={favorite.title} src={favorite.image} />
            <h3 className="text-sm font-semibold mb-1">{favorite.title}</h3>
          </a>
          </div>
          <button className="bg-red-500  text-white w-full font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1" onClick={() => deleteFromFavorites(favorite._id)}>Delete</button>
        </div>
      ))}
      </div>
      
    </>
  );
}

export default Dashboard;
