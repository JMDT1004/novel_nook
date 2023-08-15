import axios from "axios";
import { useEffect, useState } from "react";

function Home(props) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
         axios.get("/api/favorites")
            .then(res => {
                setFavorites(res.data.favorites);
            });
     console.log(favorites);
    }, [])
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;