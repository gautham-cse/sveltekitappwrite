

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/magic-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Di3h6X2X.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.D1jLZ_gR.js","_app/immutable/chunks/appwrite.pQKXoLbM.js"];
export const stylesheets = ["_app/immutable/assets/app.DimWYmB4.css"];
export const fonts = [];
