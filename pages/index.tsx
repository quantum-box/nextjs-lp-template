import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "../components/shared/Layout";

function Page() {
  const { data: session } = useSession();
  return (
    <Layout footer className="m-6 mb-40">
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
      {session?.user ? (
        <Button colorScheme="teal" onClick={() => signOut()}>
          signout
        </Button>
      ) : (
        <Button colorScheme="teal" onClick={() => signIn("google")}>
          Sing in with Google
        </Button>
      )}
    </Layout>
  );
}
export default Page;
