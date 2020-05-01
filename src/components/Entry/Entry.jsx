import React from 'react';
import styles from './Entry.module.css';

const Entry = props => {

    const detail = props.entry;

    const queues = {
        RANKED_SOLO_5x5: 'Ranked Solo',
        RANKED_FLEX_SR: 'Flex 5:5 Rank',
    }

    return (
        <div className={styles.container}>
            <img className={styles.rankedIcon} src={require(`./${detail.tier}.png`)} alt=""/>
            <div className={styles.flexVerti}>
                <h2>{queues[detail.queueType]}</h2>
                <h1>{detail.tier} {detail.rank}</h1>
                <p>{detail.leaguePoints}LP / {detail.wins}W {detail.losses}L</p>
                <p>Win Ratio {Math.floor(detail.wins/(detail.losses + detail.wins) * 100)}%</p>
            </div>
        </div>
    )
}

export default Entry;