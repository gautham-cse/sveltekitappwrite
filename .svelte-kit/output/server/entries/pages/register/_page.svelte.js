import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                  */
import "../../../chunks/user.js";
import "../../../chunks/client.js";
function validateUsername(username) {
  if (username.length < 6) {
    return "Username must be at least 6 characters long";
  }
  return username.match(/[^a-zA-Z0-9_]/) ? "Username contains invalid characters" : "";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  validateUsername(name);
  return ` ${$$result.head += `<!-- HEAD_svelte-vfkzw0_START -->${$$result.title = `<title>Secure Messenger +</title>`, ""}<!-- HEAD_svelte-vfkzw0_END -->`, ""}  <div class="a-0"><div class="a-1 0-x"><div class="a-2--x"><div><div data-svelte-h="svelte-1wxxvn8"><h2 class="a-3--x">Secure Messenger +</h2> <p class="a-3--y">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p></div> <div class="a-google__auth" style="margin-bottom: 20px"></div> <form data-svelte-h="svelte-4k7pce"><div class="a-3--z"><input placeholder="Username" type="text" class="app-input--username" draggable="false" id="app-name" name="name" autocomplete="off" spellcheck="false"></div> <div class="a-3--z"><input placeholder="Email address" type="email" class="app-input--email" draggable="false" id="app-uemail" name="email" autocomplete="off" spellcheck="false"></div> <div class="a-3--z"><input placeholder="Enter Password" type="password" name="password" class="app-input--password"></div> <div class="a-3--alpha"><div class="a-3-al--left"><a href="/">Have account? Login</a></div><div class="a-3-al-right"></div></div> <button class="a-3--submitBtn" type="submit">Continue</button></form> <div style="display:flex; justify-content: center; margin-top: -10px;" data-svelte-h="svelte-883ser"><p class="app-ftrnt"></p></div></div></div> <div class="a-2--y"></div> <div class="a-4">${``}</div></div></div>`;
});
export {
  Page as default
};
