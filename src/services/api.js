import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-sistema-de-publicacao-de-arquivos.onrender.com"
});