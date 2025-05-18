import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "91993a97199e4439881337dd104e6e99"
    }
})