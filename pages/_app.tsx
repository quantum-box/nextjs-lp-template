import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "./styles.scss";
import usePageView from "../lib/hooks/usePageView";
import { theme } from "lib/theme";
import { GoogleAnalyticsScript } from "components/shared/GoogleAnalytics";
import { KarteBlocksScript } from "components/shared/KarteBlocks";

// Use of the <SessionProvider> is now mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <KarteBlocksScript />
      <GoogleAnalyticsScript />
      <SessionProvider session={pageProps.session}>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            // revalidateOnMount: false,
            refreshInterval: 0,
          }}
        >
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
