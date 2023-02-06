import NextAuth from 'next-auth'

import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "../../../lib/prismadb"

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        // Passwordless / email sign in
        EmailProvider({
        server: process.env.MAIL_SERVER,
        from: 'NextAuth.js <no-reply@example.com>'
        }),
    ]
})