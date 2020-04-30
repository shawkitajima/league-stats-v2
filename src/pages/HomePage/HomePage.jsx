import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const [search, setSearch] = useState(null);

    const handleChange = e => {
        if (e.charCode == 13) {
            history.push(`/search/${search}`)
        }
    }

    return (
        <div>
            <h1>League Stats Finder V2</h1>
            <h2>Search for a summoner here</h2>
            <div>   
                <input onChange={e => setSearch(e.target.value)} onKeyPress={(e => handleChange(e))} type="text"/>
                <button onClick={() => history.push(`/search/${search}`)}>Search!</button>
            </div>
        </div>
    )
}

export default HomePage;