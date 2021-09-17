import NextAuth from "next-auth";

//
// firebase adapter has bug.
// ```shell
// [next-auth][error][OAUTH_CALLBACK_HANDLER_ERROR]
// https://next-auth.js.org/errors#oauth_callback_handler_error getUserByAccount is not a function
// ```
// import { FirebaseAdapter } from '@next-auth/firebase-adapter'
//

import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple"
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

import { auth } from "lib/firebase";
import { Session } from "inspector";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.SECRET,
  },
  pages: {},
  callbacks: {
    async signIn({ credentials, account, user }) {
      try {
        if (account.provider === "google") {
          const cred = GoogleAuthProvider.credential(account.id_token);
          const result = await signInWithCredential(auth, cred);
          result.user.uid;
          console.log("result: " + JSON.stringify(result));
          return true;
        }
        return false;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
  events: {},
  theme: "light",
  debug: process.env.NODE_ENV !== "production",
});
