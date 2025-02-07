const express = require('express')
const app = express()

const easternNBAteams = {
    teams: [
        {
            name: "Boston Celtics",
            city: "Boston",
            state: "Massachusetts",
            arena: "TD Garden",
            championships: 17
        },
        {
            name: "Miami Heat",
            city: "Miami",
            state: "Florida",
            arena: "Kaseya Center",
            championships: 3
        },
        {
            name: "Chicago Bulls",
            city: "Chicago",
            state: "Illinois",
            arena: "United Center",
            championships: 6
        },
        {
            name: "Philadelphia 76ers",
            city: "Philadelphia",
            state: "Pennsylvania",
            arena: "Wells Fargo Center",
            championships: 3
        },
        {
            name: "Milwaukee Bucks",
            city: "Milwaukee",
            state: "Wisconsin",
            arena: "Fiserv Forum",
            championships: 2
         }
    ]
};
app.set('view engine', 'ejs');

console.log(easternNBAteams);

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

app.use(express.static(__dirname +"/public"))
app.get("/", (req, res)=>{
    res.send("index.html", data);
  })



  app.get("/overview", (req, res)=>{
    res.render("overview.ejs", easternNBAteams);
  })
  app.get("/easternNBAteams/0", (req, res)=>{
    res.render("detail.ejs", easternNBAteams.teams[0]);
  })

app.listen(3000, () => {
    console.log("Server running")
  })
