// import cors from "cors"

import express from "express"
// const express = require("express")

const app = express()

app.get('/', (req, res) => {
    return res.send("Hello Manh, Welcome!")
})

const port = 7000
app.listen(port, () => console.log(`Listen for client on port ${port}`))