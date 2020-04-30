import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const {query} = useParams();
    
    return (
        <div>
            <h1>We are on the search results page</h1>
            <h1>
                {query}
            </h1>
        </div>
    )
}

export default SearchResults;