import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro_DmWF7RLx.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './about_CfaJ521Y.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://better-belt.vercel.app/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/workspaces/better-belt/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://better-belt.vercel.app/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_DNxfNsYd.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_EV3-5lxt.mjs'),"./posts/post-3.md": () => import('./post-3_CVY4Y0gr.mjs'),"./posts/post-4.md": () => import('./post-4_R3NrLljX.mjs')}), () => "../pages/posts/*.md");
  const pageTitle = "Learn Programming Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Here are my previous blog posts on learning programming.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/workspaces/better-belt/src/pages/blog.astro", void 0);

const $$file = "/workspaces/better-belt/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, blog as b };
