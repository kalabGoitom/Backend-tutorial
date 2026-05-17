const { readFile, writeFile, read } = require("fs/promises");
// const utils = require("util");

// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

async function getText() {
  const first = await readFile("./content/first.txt", "utf8");
  const second = await readFile("./content/second.txt", "utf8");

  await writeFile(
    "./content/result-async.txt",
    `Here is the result: ${first}, ${second}`,
    {
      flag: "a",
    },
  );
}

getText();

// function readFileAsync(path) {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// readFileAsync(path)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
