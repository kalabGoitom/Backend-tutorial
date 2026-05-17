// const { createReadStream } = require("fs");

// // const stream = createReadStream("./content/file.txt");
// const stream = createReadStream("./content/file.txt", {
//   encoding: "utf8",
//   highWaterMark: 90000,
// });

// stream.on("data", (result) => {
//   console.log(result);
// });
// stream.on("error", (err) => {
//   console.log(err);
// });

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
