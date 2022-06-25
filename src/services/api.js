import axios from "axios";

//base da URL  //rota
//http://viacep.com.br/ws/01310930/json

const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
});

export default api;



