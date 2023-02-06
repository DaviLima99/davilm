import NextAuth from 'next-auth'

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "../../../lib/prismadb"

export default NextAuth({
    debug: true,
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            id: "creadentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "user@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    throw new Error("Invalid request");
                }

                const user = await fetch(
                    `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            accept: "application/json",
                        },
                        body: Object.entries(credentials)
                            .map((e) => e.join("="))
                            .join("&"),
                    },
                ).then((res) => res.json())
                    .catch((err) => {
                        return null;
                    });;

                if (user) {
                    return user;
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: "/auth/signout",
    },
    secret: process.env.SECRET,
    // logger: {
    //     error: (code, metadata) => {
    //         logger.error(code, metadata);
    //     },
    //     warn: (code) => {
    //         logger.warn(code);
    //     },
    //     debug: (code, metadata) => {
    //         logger.debug(code, metadata);
    //     },
    // }
})