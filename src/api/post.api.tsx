import axios from "axios"

const getPosts = () => {
    return axios.get("").then(response => {
        return response.data
    }).catch( error => {
        return error.response
    })
}

export const API = {
    getPosts
}