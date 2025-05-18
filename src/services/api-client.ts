import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "88668efb940b4517a28b6cc1e2114f37"
    }
})