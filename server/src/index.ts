import "dotenv/config";
import express from "express";
import { Resend } from "resend";

const app = express();
const PORT = 3000;

const resend: Resend = new Resend(process.env.RESEND_API_KEY);

app.get('/', (req, res) => {
  res.send(`<h1>Hello from the server</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});