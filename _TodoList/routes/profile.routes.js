const express = require('express')
const profileRoutes = express.Router()
const {
    showProfilePage,
    profilePage
} = require("../controller/profile.controller")


profileRoutes.get("/", showProfilePage)
profileRoutes.post("/", profilePage)

module.exports = profileRoutes