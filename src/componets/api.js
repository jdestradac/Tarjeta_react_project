
import axios from "axios"


const api = axios.create({ baseURL: `https://pixabay.com/api/`, })


export function getImagens(text) {
    let url = "?key=46703094-d13f29a056589f66570e4498d&per_page=200"
    if (text){
        url += `&q=${text}`
    }
    return api.get(url);
}