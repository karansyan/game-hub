import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6b9b00b114f84f7092b68b7cdb877945"
    }
})