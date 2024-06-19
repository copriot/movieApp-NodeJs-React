import axios from "axios"


const api = axios.create({ baseUrl: "https://jsonplaceholder.typicode.com" });
export default api;