import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot, i as defineStyleVars } from '../astro_DmWF7RLx.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                          */

const $$Astro$6 = createAstro("https://better-belt.vercel.app/");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Hamburger.astro", void 0);

const $$Astro$5 = createAstro("https://better-belt.vercel.app/");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about">About</a> <a href="/blog">Blog</a> <a href="/tags/">Tags</a> </div>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro("https://better-belt.vercel.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://better-belt.vercel.app/");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  const capitalizedPlatform = platform.charAt(0).toUpperCase() + platform.slice(1);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${capitalizedPlatform}</a> `;
}, "/workspaces/codespaces-blank/better-belt/src/components/Social.astro", void 0);

const $$Astro$2 = createAstro("https://better-belt.vercel.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "_jidemuritala", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "Jide-Muritala", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "linkedin", "username": "in/babajidemuritala", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://better-belt.vercel.app/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/workspaces/codespaces-blank/better-belt/src/layouts/BaseLayout.astro", void 0);

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
  const finished = false;
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h1 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${pageTitle}</h1> <h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>... and my learning programming blog!</h2> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I live in ${identity.country} and work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My skills are:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>`}${finished }${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` }` })}`;
}, "/workspaces/codespaces-blank/better-belt/src/pages/about.astro", void 0);

const $$file = "/workspaces/codespaces-blank/better-belt/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, about as a };
