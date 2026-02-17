import fs, { createWriteStream } from "fs";
import zlib from "zlib";

fs.createReadStream("source.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(createWriteStream("source-unzip.txt"))
  .on("finish", () => {
    console.log("file decompressed successfully");
  });
