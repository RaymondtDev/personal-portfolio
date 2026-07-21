import express from "express";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`<h1>Hello from the server</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});