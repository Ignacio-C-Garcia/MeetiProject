const express = require("express")
const router = express.Router();

module.exports = function() {
    router.get("/", (req, res)=>{
        res.render("welcome")
    })
    router.get("/crear-cuenta", (req, res)=>{
        res.render("create-user")
    })

    return router;
}