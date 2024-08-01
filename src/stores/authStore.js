// @ts-nocheck
import { writable } from 'svelte/store';
import { account } from '$lib/appwrite';
import { goto } from '$app/navigation';

const user = writable(null);

const checkSession = async () => {
    try {
        const session = await account.getSession('current');
        user.set(session.userId);
    } catch (error) {
        user.set(null);
    }
};

checkSession();

const login = async (email, password) => {
    try {
        await account.createSession(email, password);
        await checkSession();
        goto('/dashboard');
    } catch (error) {
        console.error('Login failed', error);
    }
};

const logout = async () => {
    try {
        await account.deleteSession('current');
        user.set(null);
        goto('/login');
    } catch (error) {
        console.error('Logout failed', error);
    }
};

export { user, login, logout, checkSession };
