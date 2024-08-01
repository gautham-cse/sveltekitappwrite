import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
/* empty css               */
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath = "";
  return `  <div class="app_pageNotFound"><div><h2 class="a-3--x" data-svelte-h="svelte-773rlf">404 - Page not found.</h2> <p class="a-3--x--p"><span style="color: white; background-color: #c8c65e; color: black; border-radius:3px; padding: 3px; padding-left: 5px;">${escape(currentPath)}</span>  is like a ghost in the server</p><br> <a class="makeLnkBtn" href="/" data-svelte-h="svelte-1fc0wde">Go Home</a></div></div>`;
});
export {
  Error as default
};
