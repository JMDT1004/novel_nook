import React from "react";
import { BookCard } from "../components/Bookcard";

function Results({ searchResults }) {
    return (
        <>
            <BookCard books={searchResults} />
        </>
    )
}

export default Results