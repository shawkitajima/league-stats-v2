import React, {useState, useEffect} from 'react';
import summonerService from '../../utils/summonerService';
import styles from './GameOverview.module.css';

const GameOverview = props => {

    const [details, setDetails] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [player, setPlayer] = useState({});

    const champ = Object.keys(props.champions).find(champ => props.champions[champ].key == props.match.champion);

    const getSpell = id => {
        return Object.keys(props.spells).find(spell => props.spells[spell].key == id)
    }

    useEffect(() => {
        summonerService.matchDetail(props.match.gameId).then(res => {
            setDetails(res);
            setPlayer(res.participantIdentities.find(participant => participant.player.summonerName === props.result.name));
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
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/spell/${getSpell(details.participants[player.participantId - 1].spell1Id)}.png`} alt=""/>
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/spell/${getSpell(details.participants[player.participantId - 1].spell2Id)}.png`} alt=""/>
            </div>
            <div>KDA</div>
            <div>Levels/CS/P/Kill</div>
            <div>
                <div>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item0}.png`} alt=""/>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item1}.png`} alt=""/>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item2}.png`} alt=""/>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item3}.png`} alt=""/>
                </div>
                <div>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item4}.png`} alt=""/>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item5}.png`} alt=""/>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/item/${details.participants[player.participantId - 1].stats.item6}.png`} alt=""/>
                </div>
            </div>
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