import axios from "axios";


export const get = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(({ data }) => resolve(data))
            .catch((error) => reject(error));
    });
}