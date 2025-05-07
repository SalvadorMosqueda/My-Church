// Ejemplo en una API route de Next.js: /pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (email === "admin@admin.com" && password === "123456") {
    // Guardar cookie por 7 días
    res.setHeader(
      "Set-Cookie",
      serialize("token", "123456", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      })
    );

    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ error: "Invalid credentials" });
}
