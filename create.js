const { writeFileSync } = require("fs");

for (let i = 0; i < 100; i++) {
  writeFileSync(`./content/file.txt`, `Hello world`, {
    flag: "a",
  });
}
