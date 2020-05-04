import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import summonerService from '../../utils/summonerService';
import styles from './SearchResults.module.css';

import Entry from '../../components/Entry/Entry';
import GameOverview from '../../components/GameOverview/GameOverview';

const SearchResults = () => {

    const history = useHistory();
    
    const handleChange = e => {
        if (e.charCode == 13) {
            history.push(`/search/${search}`)
        }
    }

    const [result, setResult] = useState({});
    const [entries, setEntries] = useState({});
    const [matches, setMatches] = useState([]);
    const [search, setSearch] = useState(null);
    const [champions, setChampions] = useState({});
    const [spells, setSpells] = useState({});

    const {query} = useParams();

    useEffect(() => {
        summonerService.search(query).then(res => {
            setResult(res);
            summonerService.entries(res.id).then(res => setEntries(res));
            summonerService.matches(res.accountId).then(res => setMatches(res.matches));
            summonerService.champions().then(res => setChampions(res.data));
            summonerService.spells().then(res => setSpells(res.data));
        });
    }, [query]);
    

    return (
        <div>
            <div>   
                <input onChange={e => setSearch(e.target.value)} onKeyPress={(e => handleChange(e))} type="text"/>
                <button onClick={() => history.push(`/search/${search}`)}>Search!</button>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    {entries.length > 0 && 
                        <div>
                            {entries.map((entry, idx) => (
                                < Entry key={idx} entry={entry} />
                            ))}
                        </div>
                    }
                </div>
                <div className={styles.right}>
                    {matches.length > 0 && (
                        matches.slice(0, 2).map((match, idx) => (
                            <GameOverview match={match} key={idx} champions={champions} result={result} spells={spells}/>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults;