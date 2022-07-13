const express = require("express")
const app = express()
app.use(express.static(process.cwd() + "/public"))

app.get("/", (req, res) => {
    res.render(process.cwd() + "/public/views/index.ejs")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server aktif")
})