const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("WELCOME TO OUR HOME PAGE");
    return res.end();
  }

  if (req.url == "/about") {
    res.write("WELCOME TO OUR ABOUT PAGE");
    return res.end();
  }

  res.write(`<h1>OOPS!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back Home</a>`);
  res.end();
});

server.listen(5000);
