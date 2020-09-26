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
            client_id: "",
            client_secret: ""
        }),
        config 
    );
    token = promise.data;
    return token.access_token;
}

module.exports = getToken;