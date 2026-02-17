import fs from "fs";
import http from "http";

// const videoStream =

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "video/mp4" });
    fs.createReadStream("./test_video.mp4").pipe(res);
  })
  .listen(3001, () => {
    console.log("Server running at 3001");
  });
