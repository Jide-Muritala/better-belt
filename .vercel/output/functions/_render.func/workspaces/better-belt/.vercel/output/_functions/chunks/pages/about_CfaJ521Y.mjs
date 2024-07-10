import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot, i as defineStyleVars } from '../astro_DmWF7RLx.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                          */

const $$Astro$7 = createAstro("https://better-belt.vercel.app/");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/workspaces/better-belt/src/components/Hamburger.astro", void 0);

const $$Astro$6 = createAstro("https://better-belt.vercel.app/");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about">About</a> <a href="/blog">Blog</a> <a href="/tags/">Tags</a> </div>`;
}, "/workspaces/better-belt/src/components/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://better-belt.vercel.app/");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate(_a || (_a = __template(["", `<button id="themeToggle" data-astro-cid-oemx5le4> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path> </svg> </button>  <script>
    const theme = (() => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
        return 'light';
    })();
  
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");
  
      const isDark = element.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  
    document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
  <\/script>`])), maybeRenderHead());
}, "/workspaces/better-belt/src/components/ThemeIcon.astro", void 0);

const $$Astro$4 = createAstro("https://better-belt.vercel.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/workspaces/better-belt/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://better-belt.vercel.app/");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  const capitalizedPlatform = platform.charAt(0).toUpperCase() + platform.slice(1);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${capitalizedPlatform}</a> `;
}, "/workspaces/better-belt/src/components/Social.astro", void 0);

const $$Astro$2 = createAstro("https://better-belt.vercel.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "_jidemuritala", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "Jide-Muritala", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "linkedin", "username": "in/babajidemuritala", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "/workspaces/better-belt/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://better-belt.vercel.app/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/workspaces/better-belt/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://better-belt.vercel.app/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Jide",
    country: "Spain",
    occupation: "Software developer",
    hobbies: ["reading", "football", "movies"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h1 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${pageTitle}</h1> <h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>... and my learning programming blog!</h2> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I live in ${identity.country} and work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My skills are:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I finished this tutorial!</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` }` })}`;
}, "/workspaces/better-belt/src/pages/about.astro", void 0);

const $$file = "/workspaces/better-belt/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, about as a };
