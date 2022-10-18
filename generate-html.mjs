import { faker } from "@faker-js/faker";
import { format } from "prettier";
import { writeFileSync } from "fs";

const createDivs = (maxDepth) => {
  let div = "";

  for (let i = 0; i < maxDepth; i++) {
    div += `<div id="${faker.lorem.word(10)}" class="${faker.lorem.word(
      10
    )}">${faker.lorem.word(10)}`;
  }

  for (let i = 0; i < maxDepth; i++) {
    div += `</div>`;
  }
  return div;
};

let html = `
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>`;

for (let i = 0; i < 1000; i++) {
  html += createDivs(10);
}

const end = `
  </body>
</html>
`;

html += end;

writeFileSync("test.html", html);
