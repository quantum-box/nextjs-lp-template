import Head from "next/head";
import { useRouter } from "next/router";

interface MetaHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}
export const MetaHead: React.FC<MetaHeadProps> = ({
  title = "スキルフォレスト | 自分探しの森へ",
  description = "スキルのレベルアップとその結果によって誰のバイアスも受けずに自分にぴったりな 仕事を探そう。 ",
  url = "",
  image = "",
}) => {
  const router = useRouter()
  const currentUrl = url ?? process.env.NEXTAUTH_URL + router.asPath
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      {/* <link rel="shortcut icon" href="\favicon_package_v0.16\favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="\favicon_package_v0.16\apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="\favicon_package_v0.16\android-chrome-256x256.png"
      /> */}
    </Head>
  );
};
