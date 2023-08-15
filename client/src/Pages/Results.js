import React from "react";
import { BookCard } from "../components/Bookcard";

function Results({ searchResults }) {
    return (
        <>
        
            <BookCard books={searchResults} />
            <h2>Test</h2>
            
        </>
    )
}

export default Results