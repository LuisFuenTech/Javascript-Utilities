const http = require("http");
const HttpError = require("./index");

const host = "127.0.0.1";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  try {
    throw new HttpError().notFound("User not found");
  } catch (error) {
    if (error.isHttpError) {
      console.log(error);
      const { message, statusCode } = error;

      res.writeHead(error.statusCode);
      res.end(JSON.stringify({ statusCode, message }));
    } else {
      res.writeHead(500);
      res.end(JSON.stringify({ statusCode: 500, message: error.message }));
    }
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
