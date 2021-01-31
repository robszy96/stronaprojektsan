const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use("/js", express.static(path.join(__dirname,"./js")));
app.get("/", function (req, res){
    res.render("index",{
        pageTitle: "Lekcja 01",
        subTitle: "Podtytuł"
    });
})

app.get("/about/marcin", function (req, res){
    res.send("Strona internetowa o mnie");
} )

app.listen(port, (err) => {
    if (err) { return console.log("błąd:" ,err)}
    console.log(`server działa na porcie ${port}`)
})