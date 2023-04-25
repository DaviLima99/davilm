import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import sha256 from "crypto-js/sha256";
import { omit } from "lodash";
import { logger } from "@/lib/logger";


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    logger.debug("TEESSTETETE")
    if (req.method === "POST") {
        await handlePost(req, res);
    } else {
        throw new Error(`The HTTP ${req.method} method is not supported at this route`);
    }
}

const hashPassword = (password: string) => {
    return sha256(password).toString();
  };

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
    });

    if (user && user.password == hashPassword(req.body.password)) {
        logger.debug("password correct");
        res.json(omit(user, "password"));
      } else {
        logger.debug("incorrect credentials");
        res.status(400).end("Invalid credentials");
      }
}