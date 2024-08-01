import { Client, Databases, Account, ID } from "appwrite";
import {
  PUBLIC_APPWRITE_ENDPOINT,
  PUBLIC_APPWRITE_PROJECT,
} from "$env/static/public";
export const client = new Client();
client
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT);

export const account = new Account(client);
export const databases = new Databases(client);
export {ID} from 'appwrite';