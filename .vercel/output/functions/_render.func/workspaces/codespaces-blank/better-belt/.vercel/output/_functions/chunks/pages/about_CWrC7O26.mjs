import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as defineStyleVars, h as renderHead } from '../astro_DMm0qU4i.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Navigation.astro", void 0);

const $$Astro$2 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")}>${platform}</a>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Social.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "_jidemuritala" })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "Jide-Muritala" })} ${renderComponent($$result, "Social", $$Social, { "platform": "linkedin", "username": "in/babajidemuritala" })} </footer>`;
}, "/workspaces/codespaces-blank/better-belt/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
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
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-kh7btl4r": true })} <h1 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${pageTitle}</h1> <h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>... and my new Astro site!</h2> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My skills are:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>`} ${finished } ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` } ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })} </body></html>`;
}, "/workspaces/codespaces-blank/better-belt/src/pages/about.astro", void 0);

const $$file = "/workspaces/codespaces-blank/better-belt/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navigation as $, $$Footer as a, about as b };
