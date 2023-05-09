import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import { logger } from "../../../lib/logger";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  debug: true,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: "credentials",
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        console.log("TESTE...")
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
        )
          .then((res) => res.json())
          .catch((err) => {
            return null;
          });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // pages
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  logger: {
    error: (code, metadata) => {
      logger.error(code, metadata);
    },
    warn: (code) => {
      logger.warn(code);
    },
    debug: (code, metadata) => {
      logger.debug(code, metadata);
    },
  },
  session: { strategy: "jwt" },
};

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, options);
export default authHandler;
