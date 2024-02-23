import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_DMm0qU4i.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"Thumbnail of Astro rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "/workspaces/codespaces-blank/better-belt/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
