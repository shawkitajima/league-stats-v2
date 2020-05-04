import React, {useState, useEffect} from 'react';
import summonerService from '../../utils/summonerService';
import styles from './GameOverview.module.css';

const GameOverview = props => {

    const [details, setDetails] = useState({});
    const [loaded, setLoaded] = useState(false);

    const champ = Object.keys(props.champions).find(champ => props.champions[champ].key == props.match.champion);

    const getSpell = id => {
        return Object.keys(props.spells).find(spell => props.spells[spell].key == id)
    }

    useEffect(() => {
        summonerService.matchDetail(props.match.gameId).then(res => {
            setDetails(res);
            const player = res.participantIdentities.find(participant => participant.player.summonerName === props.result.name);
            setLoaded(true);
        })
    }, [props])

    return (
         loaded ? 
        (
        <div className={styles.container}>
            <div>{details.gameMode}</div>
            <div>
                <img className={styles.champImg} src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/champion/${champ}.png`} alt=""/>
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/spell/${getSpell(32)}.png`} alt=""/>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
         : (
            <div>
                <h1>Loading Baby</h1>
            </div>
        )
    )
}

export default GameOverview;