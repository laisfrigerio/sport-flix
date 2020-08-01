import axios from './axios';

export const fetch = async (league) => {
    return await axios.get(`search_all_teams.php?l=${encodeURIComponent(league)}`)
        .then(({data}) => data.teams === null ? [] : data.teams )
        .catch(() => []);
}

export const find = async (id) => {
    return await axios.get(`lookupteam.php?id=${id}`)
        .then(({data}) => {
            if (data.teams && Array.isArray(data.teams) && data.teams.length === 1) {
                return data.teams[0];
            }

            return null;
        })
        .catch(() => null);
}