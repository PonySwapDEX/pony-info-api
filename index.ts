import { VercelRequest, VercelResponse } from "@vercel/node";
import { return200, return500 } from "./utils/response";

export default async function (req: VercelRequest, res: VercelResponse): Promise<void> {
    res.send({title: "OK"})
}