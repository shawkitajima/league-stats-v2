import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import summonerService from '../../utils/summonerService';

const SearchResults = () => {
    const [entries, setEntries] = useState({});
    const [matches, setMatches] = useState({});

    const {query} = useParams();

    useEffect(() => {
        summonerService.search(query).then(res => {
            summonerService.entries(res.id).then(res => setEntries(res));
            summonerService.matches(res.accountId).then(res => setMatches(res));
        });
    }, [query]);
    

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