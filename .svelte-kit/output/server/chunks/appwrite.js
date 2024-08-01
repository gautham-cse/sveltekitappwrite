import { Client, Account, Databases } from "appwrite";
const PUBLIC_APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const PUBLIC_APPWRITE_PROJECT = "669b885c001fea34dbf2";
const client = new Client();
client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT);
const account = new Account(client);
new Databases(client);
export {
  account as a
};
