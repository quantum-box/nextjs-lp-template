import hubspot from "@hubspot/api-client";

export const hubspotClient = new hubspot.Client({
  apiKey: process.env.HUBSPOT_API_KEY as string,
});
