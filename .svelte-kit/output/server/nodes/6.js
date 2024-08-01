

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DeqZ_ljv.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.D1jLZ_gR.js","_app/immutable/chunks/user.4x8wS_oe.js","_app/immutable/chunks/entry.kSduwkpk.js","_app/immutable/chunks/appwrite.pQKXoLbM.js"];
export const stylesheets = ["_app/immutable/assets/app.DimWYmB4.css"];
export const fonts = [];
