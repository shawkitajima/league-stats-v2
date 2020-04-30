const BASE_URL = '/api/summoners';

export default {
    search,
    entries,
    matches,
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

