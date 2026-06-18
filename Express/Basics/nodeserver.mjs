import http from "http";

http
  .createServer((req, res) => {
    res.setHeader({ "content-type": "application/JSON" });
    if (req.url === "/") {
      res.statusCode = 200;
      res.end(JSON.stringify({ Page: "Home" }));
    } else if (req.url === "/users") {
      res.statusCode = 200;
      res.end(JSON.stringify({ Page: "users" }));
    } else if (req.url === "/products") {
      res.statusCode = 200;
      res.end(JSON.stringify({ Page: "Products" }));
    }
    else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route Not Found" }));
  }
  })
  .listen(3001, () => {
    console.log("Server up and running at 3001");
  });
