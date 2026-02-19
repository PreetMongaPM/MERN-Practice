// const fs = require('fs').promises;
import fs from "fs";

async function readFile(filePath) {
  try { 
    const data = await fs.promises.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error from readFile${error.message}`);
  }
}

readFile("./file.txt");
