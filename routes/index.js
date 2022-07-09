const express = require("express")

const routes = express.Router()

routes.get("/prueba", (req, res) => {
    return res.send({
        message: "Hello World"
    })
})

module.exports = routes