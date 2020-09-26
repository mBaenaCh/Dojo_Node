const axios = require("axios").default;
const { get } = require("http");
const qs = require("querystring");

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
}

const getToken = async() => {
    let token = "";
    const promise = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({
            grant_type: "client_credentials",
            client_id: "bfa82a0c16f84226a1aa48eadcc4c91e",
            client_secret: "de0953f899ef4762a4dd57149672033b"
        }),
        config 
    );
    token = promise.data;
    return token.access_token;
}

module.exports = getToken;