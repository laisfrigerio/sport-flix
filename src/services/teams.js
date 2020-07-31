import axios from './axios';

export const fetch = async (league) => {
    return await axios.get(`search_all_teams.php?l=${encodeURIComponent(league)}`)
        .then(({data}) => data.teams === null ? [] : data.teams )
        .catch(() => []);
}