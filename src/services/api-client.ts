import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '793982b5d1634100807838784ad60448'
    }
})