module.exports = async app => {
    const trackController = require("../controllers/tracks.controller.js");

    let router = require("express").Router();
    router.get("/", await trackController.findAllTracks);

    router.post("/", await trackController.createTrack);
    app.use('/v1/tracks/', router);
}