import axios from './axios';

export const fetch = async () => {
    return await axios.get("all_leagues.php")
        .then(({data}) => {
            console.log(data);
            return data.leagues.slice(0, 20);
        })
        .catch(() => []);
}