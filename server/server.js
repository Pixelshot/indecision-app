const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
// PORT for heroku to serve up our server.
// if PORT doesnt exists, revert to port 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// app.get will bring the user back to "index.html" if there is no path found.

app.listen(port, () => {
  console.log("server is up and running!");
});
