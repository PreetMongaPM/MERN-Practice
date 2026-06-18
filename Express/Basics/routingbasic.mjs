import http from "http";
import { URL } from "url";

http
  .createServer((req, res) => {
    const myURL = new URL(req.url, "https://${req.headers.host}");
    const id = myURL.searchParams.get("id");
    const active = myURL.searchParams.get("active");

    console.log(id, active);
    res.end("Query extracted");
  })
  .listen(3001, () => {
    console.log("Server up and running at 3001");
  });
