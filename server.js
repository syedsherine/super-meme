const express = require("express");
const path = require("path");
const http = require('http');
const bodyParser= require("body-parser");

const tasks = require("./server/routes/tasks");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api", tasks);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));