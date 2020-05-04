import React, {useState, useEffect} from 'react';
import summonerService from '../../utils/summonerService';

const GameOverview = props => {

    const [details, setDetails] = useState({});

    useEffect(() => {
        summonerService.matchDetail(props.match.gameId).then(res => setDetails(res));
    }, [props])

    return (
        <div>
            <h1>Yoloswag</h1>
        </div>
    )
}

export default GameOverview;