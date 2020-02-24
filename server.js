var express = require("express")

var app = express()

var PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("public"))

var apiroutes = require("./routes/apiroutes")
var htmlroutes = require("./routes/htmlroutes")

apiroutes(app)
htmlroutes(app)

app.listen(PORT, function() {
    console.log("app is listening on http://localhost:" + PORT)
})