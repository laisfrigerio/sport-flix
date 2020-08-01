import axios from './axios';

export const fetch = async () => {
    return await axios.get("all_leagues.php")
        .then(({data}) => data.leagues.slice(0, 50))
        .catch(() => []);
}

export const find = async (id) => {
    return await axios.get(`lookupleague.php?id=${id}`)
        .then(({data}) => {
            if (data.leagues && Array.isArray(data.leagues) && data.leagues.length === 1) {
                return data.leagues[0];
            }

            return null;
        })
        .catch(() => null);
}