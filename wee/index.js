const http = require("http");
const fs = require("fs");
var requests = require("requests");
const { listen } = require("../app");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=siliguri&appid=9769b4424fd6da836ec9c6f9e4d787ec"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        console.log(arrdata[0].main.temp);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);

        console.log("end");
      });
  }
});

server.listen(3000, "127.0.0.1");
