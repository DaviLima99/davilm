import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        await handlePost(req, res);
    } else {
        throw new Error(`The HTTP ${req.method} method is not supported at this route`);
    }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    const user = await prisma.user.findUnique({
        where: { email: req.body.email },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: true,
        }
    })
}