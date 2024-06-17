const express = require('express');
const cors = require('cors');
const mongodb = require('./mongooseConnect');
const path=require("path");
const { fileURLtoPath } = require('url');

const app = express();
mongodb();
app.use(cors());
app.use(express.json());


app.use("/api", require("./routes/getRates"));
app.use("/api", require("./routes/getCategories"));
app.use("/api", require("./routes/getOffers"));
app.use("/api", require("./routes/createRequest"));
app.use("/api", require("./routes/createUser"));
app.use("/api", require("./routes/setRates"));
app.use("/api", require("./routes/getRequest"));


const currentDir = __dirname;
console.log("Current Directory:", currentDir);

// Now __dirname contains the full directory path of the current module
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/client/build")));
app.get('/privacypolicy', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/privacy.html'));
});
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );

app.listen(5000, () => {
    console.log("Backend Server Started");
});
