import { w as writable } from "./index.js";
import { ID } from "appwrite";
import { g as goto } from "./client.js";
import { a as account } from "./appwrite.js";
const isBrowser = typeof window !== "undefined";
const createUser = () => {
  const store = writable(null);
  async function init() {
    if (!isBrowser) return;
    try {
      store.set(await account.get());
    } catch (e) {
      store.set(null);
    }
  }
  init();
  async function register(email, password, name) {
    if (!isBrowser) return;
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
  }
  async function login(email, password) {
    if (!isBrowser) return;
    await account.createEmailPasswordSession(email, password);
    await init();
    goto();
  }
  async function logout() {
    await account.deleteSession("current");
    store.set(null);
  }
  return {
    subscribe: store.subscribe,
    register,
    login,
    logout,
    init
  };
};
createUser();
