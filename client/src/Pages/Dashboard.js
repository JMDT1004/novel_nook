import axios from "axios";

function Dashboard(props) {
  async function deleteFromFavorites(favoriteId) {
    try {
      await axios.delete(`/api/favorites/${favoriteId}`);
      // Update the state to remove the deleted favorite
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
      <h2>Welcome, {props.state.user?.username}!</h2>
      <h3>Here are your favorite books:</h3>

      <div className="flex flex-wrap">
      {props.state.user?.favorites.map((favorite) => (
        <div key={favorite._id}>
          <a href={`book/${favorite.bookId}`}>
            <img alt={favorite.title} src={favorite.image} />
            <h3>{favorite.title}</h3>
          </a>
          <button onClick={() => deleteFromFavorites(favorite._id)}>Delete from favorites</button>
        </div>
      ))}
      </div>
      
    </>
  );
}

export default Dashboard;
