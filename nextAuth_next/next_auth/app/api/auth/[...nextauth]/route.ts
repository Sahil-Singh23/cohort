import CredentialsProvider from "next-auth/providers/credentials"
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
  CredentialsProvider({
    name: 'Login with email',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "sahil121" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
    //   const res = await fetch("/your/endpoint", {
    //     method: 'POST',
    //     body: JSON.stringify(credentials),
    //     headers: { "Content-Type": "application/json" }
    //   })
    console.log(credentials);
    const user = {
        name: "sahil",
        id:"1",
        username:"sah1l"

    }
      //const user = await res.json()

      // If no error and we have user data, return it
      if ( user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  }),
  AppleProvider({
    clientId: process.env.APPLE_ID ||"",
    clientSecret: process.env.APPLE_SECRET ||""
  }),
  GoogleProvider({
    clientId: "asda",
    clientSecret: "sad"
  })
]
})

export { handler as GET, handler as POST }