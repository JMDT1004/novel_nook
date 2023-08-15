function Dashboard(props) {
  
 
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
        </div>
      ))}
      </div>
      
    </>
  );
}

export default Dashboard;
