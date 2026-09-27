const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all website files
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Kenya Beyond Travel running on port ${PORT}`);
});
