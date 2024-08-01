import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css               */
import "../../chunks/user.js";
import "../../chunks/client.js";
import "../../chunks/appwrite.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${$$result.head += `<!-- HEAD_svelte-1bz4g8c_START -->${$$result.title = `<title>Secure Messenger +</title>`, ""}<!-- HEAD_svelte-1bz4g8c_END -->`, ""}  <div class="a-0"><div class="a-1 0-x"><div class="a-2--x"><div><div data-svelte-h="svelte-1wxxvn8"><h2 class="a-3--x">Secure Messenger +</h2> <p class="a-3--y">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p></div> <div class="a-google__auth" style="margin-bottom: 20px"><button type="button" id="app-submit--signInWithGoogleAuth" data-svelte-h="svelte-1rj8vcz">Login with Magic URL</button> <div class="a-3--divider" style="display: flex; justify-content: center; width: 100%; font-size: 12px;" data-svelte-h="svelte-1rdlecs"><hr style="width: 35%;"> or <hr style="width: 35%;"></div></div> <form><div class="a-3--z" data-svelte-h="svelte-1h4aumb"><input placeholder="Email address" type="email" class="app-input--email" draggable="false" id="app-uemail" name="email" autocomplete="off" spellcheck="false"></div> <div class="a-3--z" data-svelte-h="svelte-q165t6"><input type="password" placeholder="Enter Password" name="password" class="app-input--password" minlength="8"></div> <div class="a-3--alpha" data-svelte-h="svelte-1g8ncdw"><div class="a-3-al--left"><a href="/register">New here? Register</a></div><div class="a-3-al--right"><a href="/forgot">Forgot Password?</a></div></div> <button class="a-3--submitBtn" type="submit" ${""}>Continue</button></form> <div style="display:flex; justify-content: center; margin-top: -10px;" data-svelte-h="svelte-883ser"><p class="app-ftrnt"></p></div></div></div> <div class="a-2--y"></div> <div class="a-4">${``}</div></div></div>`;
});
export {
  Page as default
};
