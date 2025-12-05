import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: subject,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.log("Error sending email", error);

    return Response.json({ success: false, error }, { status: 400 });
  }
}
