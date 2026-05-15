const { readFile, writeFile, read } = require("fs");
// const { readFile, writeFile, read } = require("fs/promises");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `This is the result of async: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File written successfully!");
      },
    );
  });
});

// const readfilePromise = async () => {
//   try {
//     const firstFile = await readFile("./content/first.txt", "utf-8");
//     const secondFile = await readFile("./content/second.txt", "utf-8");
//     console.log(firstFile);
//     console.log(secondFile);
//   } catch (error) {
//     console.log(error);
//   }
// };

// readfilePromise();
