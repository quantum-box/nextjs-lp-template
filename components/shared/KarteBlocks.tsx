import Script from "next/script";

const KARTE_BLOCKS = process.env.NEXT_PUBLIC_KARTE_BLOCKS_ID;

export const KarteBlocksScript = () => (
  <Script
    src={`https://cdn-blocks.karte.io/${KARTE_BLOCKS}/builder.js`}
  ></Script>
);
