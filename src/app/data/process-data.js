const { parseCourse } = require("./parseCourse");
const fs = require("fs");

const inputPath = "./raw";
const outputPath = "./courses";

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

const inputFiles = fs.readdirSync(inputPath);
for (const inputFile of inputFiles) {
  try {
    console.log(`Processing ${inputFile}...`);
    const outputFilePath = `${outputPath}/${inputFile.replace(
      ".txt",
      ".json"
    )}`;
    const inputFilePath = `${inputPath}/${inputFile}`;

    const input = fs.readFileSync(inputFilePath, "utf-8").trim();
    const output = parseCourse(input);

    // console.log({ input }, { inputFile }, { inputFilePath }, { output });
    fs.writeFileSync(outputFilePath, JSON.stringify(output, null, 2));

    console.log(`Processed ${inputFile} -> ${outputFilePath}`);
  } catch (error) {
    let errorMessage = `Error processing ${inputFile}: ${error?.message}`;
    console.error(errorMessage);
    console.log(JSON.stringify(error, null, 2));
  }
}
