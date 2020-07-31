export const search = (list, search, key) => {
    search = search.toUpperCase();
    return list.filter((item) =>  item[key].toUpperCase().indexOf(search) !== -1);
}