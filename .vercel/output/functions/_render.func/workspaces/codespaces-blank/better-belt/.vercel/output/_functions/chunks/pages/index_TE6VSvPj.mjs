import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, h as renderHead, f as renderComponent } from '../astro_DMm0qU4i.mjs';
import 'kleur/colors';
import { $ as $$Navigation, a as $$Footer } from './about_CWrC7O26.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home page";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} <h1>${pageTitle}</h1> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/workspaces/codespaces-blank/better-belt/src/pages/index.astro", void 0);

const $$file = "/workspaces/codespaces-blank/better-belt/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
