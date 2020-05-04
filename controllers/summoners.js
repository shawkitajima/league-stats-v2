const axios = require('axios');

module.exports = {
    search,
    entries,
    matches,
    matchDetail,
}

function search(req, res) {
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.query}?api_key=${process.env.LEAGUE_KEY}`)
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
}

function entries(req, res) {
    axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.params.id}?api_key=${process.env.LEAGUE_KEY}`)
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
}

function matches(req, res) {
    axios.get(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.params.id}?api_key=${process.env.LEAGUE_KEY}`)
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
}

function matchDetail(req, res) {
    axios.get(`https://na1.api.riotgames.com/lol/match/v4/matches/${req.params.id}?api_key=${process.env.LEAGUE_KEY}`)
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
}