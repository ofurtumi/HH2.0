import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type HHLifi = {
  time: number;
  name: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .send({ message: "Aðeins leyfilegt að senda POST köll" });
  }

  const body = req.body as HHLifi;

  try {
    // * auðkenning undirbúin
    const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY ?? "");
    // ? privateKey skilgreint sem JSON til að reyna fá það til að virka í prod

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
        // private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.time, body.name, body.message]],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (e: any) {
    return res
      .status(500)
      .send({ message: e.message ?? "Something went wrong" });
  }
}
