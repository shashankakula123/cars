import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID baTQZ4pqOXLo542tYpMDaSbBcsUDR-wgSma5L3nMr_Q'
      }
})