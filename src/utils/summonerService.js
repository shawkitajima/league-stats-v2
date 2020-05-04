const BASE_URL = '/api/summoners';

export default {
    search,
    entries,
    matches,
    matchDetail,
    champions,
    spells,
}

function search(query) {
    return fetch(`${BASE_URL}/search/${query}`).then(res => res.json());
}

function entries(id) {
    return fetch(`${BASE_URL}/entries/${id}`).then(res => res.json());
}

function matches(id) {
    return fetch(`${BASE_URL}/matches/${id}`).then(res => res.json());
}

function matchDetail(id) {
    return fetch(`${BASE_URL}/detail/${id}`).then(res => res.json());
}

function champions() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json').then(res => res.json());
}

function spells() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/summoner.json').then(res => res.json());
}