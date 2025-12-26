// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!!!!');
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get('/about', (req, res) => {
  res.send('Hello from About!');
});

app.get('/contact', (req, res) => {
  res.send('Hello from About!');
});

app.get('/services', (req, res) => {
  res.send('Hello from Services!');
});

app.get('/products', (req, res) => {
  res.send('Hello from Products!');
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
