/** @type { import ('@sveltejs/kit').Handle } */

export async function handle({ event, resolve }) {
    if (event.url.pathname.startsWith('/sysinfo')) {
        return new Response('© Airbase Global Network - 2024 | Server Health: Nominal')
    }

    const response = await resolve(event)
    return response
}