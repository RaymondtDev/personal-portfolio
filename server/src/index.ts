import "dotenv/config";
import express, { Request, Response } from "express";
import { Resend } from "resend";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

const resend: Resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send-mail', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "raymondtdev@gmail.com",
      subject: "Email From Portfolio Submission",
      html: `
        <h2>${name}</h2>
        <p>${message}</p><br/>
        <p>${email}</p>
        <small>${phone}</small>
      `
    });

    if (error) return res.status(400).json({ success: false, error});

    return res.status(200).json({ succes: true, data });
  } catch (error) {
    console.error("Error occured when sending email:", error);
    res.status(500).json({ message: error })
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});