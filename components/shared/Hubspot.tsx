import Script from "next/script";

const HUBSPOT_ID = process.env.NEXT_PUBLIC_HUBSPOT_CHAT_ID;

export const HubspotScript = () => (
  <Script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src={`//js.hs-scripts.com/${HUBSPOT_ID}.js`}
  />
);
