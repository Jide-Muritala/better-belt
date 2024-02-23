import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_DMm0qU4i.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"my-first-blog-post\">My First Blog Post</h1>\n<p>Published on: 2022-07-01</p>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>";

				const frontmatter = {"title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Astro Learner","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"The full Astro logo."},"tags":["astro","blogging","learning in public"]};
				const file = "/workspaces/codespaces-blank/better-belt/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "# My First Blog Post\n\nPublished on: 2022-07-01\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"my-first-blog-post","text":"My First Blog Post"},{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
