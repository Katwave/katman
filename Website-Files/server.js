const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${__dirname}/public/html/contact.html`);
});

app.get("/blog", (req, res) => {
  res.sendFile(`${__dirname}/public/html/blog.html`);
});

app.get("/music", (req, res) => {
  res.sendFile(`${__dirname}/public/html/music.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/public/html/about.html`);
});

app.get("/sign-in", (req, res) => {
  res.sendFile(`${__dirname}/public/html/sign-in.html`);
});

app.get("/sign-up", (req, res) => {
  res.sendFile(`${__dirname}/public/html/sign-up.html`);
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening on PORT ${port}...`);
});
