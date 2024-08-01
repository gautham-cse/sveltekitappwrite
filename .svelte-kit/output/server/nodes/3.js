import * as universal from '../entries/pages/chat/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chat/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/chat/+page.js";
export const imports = ["_app/immutable/nodes/3.oABMUD3U.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.D1jLZ_gR.js","_app/immutable/chunks/entry.kSduwkpk.js","_app/immutable/chunks/appwrite.pQKXoLbM.js"];
export const stylesheets = ["_app/immutable/assets/app.DimWYmB4.css"];
export const fonts = [];
