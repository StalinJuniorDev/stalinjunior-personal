const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.render(process.cwd() + "/views/index.ejs")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server aktif")
})