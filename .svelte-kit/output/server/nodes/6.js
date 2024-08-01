

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.bxtKqLSb.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.D1jLZ_gR.js","_app/immutable/chunks/user.B1VH8etP.js","_app/immutable/chunks/entry.CD2cri4e.js","_app/immutable/chunks/appwrite.pQKXoLbM.js"];
export const stylesheets = ["_app/immutable/assets/app.DimWYmB4.css"];
export const fonts = [];
