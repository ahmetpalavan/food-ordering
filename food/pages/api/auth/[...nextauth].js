import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../util/mongo";

export default NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  // A database is optional, but required to persist accounts in a database
  pages: {
    signIn: "/auth/login",
  },
});
