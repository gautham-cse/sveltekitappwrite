import { writable } from "svelte/store";
import { ID } from 'appwrite';
import { goto } from '$app/navigation';
import { account } from '$lib/appwrite';

const isBrowser = typeof window !== 'undefined'

const createUser = () => {
    const store = writable(null)
    async function init() {
        if (!isBrowser) return 
        try {
            // @ts-ignore
            store.set(await account.get())
        }
        catch (e) {
            store.set(null)
        }
    }

    init()

    // @ts-ignore
    async function register(email, password, name) {
        if (!isBrowser) return 
        await account.create(ID.unique(), email, password, name)
        await login(email, password)
    }

    // @ts-ignore
    async function login(email, password) {
		if (!isBrowser) return;
		await account.createEmailPasswordSession(email, password);
		await init();
		goto('/');
	}

    async function logout() {
        await account.deleteSession('current')
        store.set(null)
    }

    return {
        subscribe: store.subscribe,
        register,
        login,
        logout,
        init
    }
}

export const user = createUser()


