import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Learn Programming Blog',
    description: 'A blog about learning to program',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_DNxfNsYd.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_EV3-5lxt.mjs'),"./posts/post-3.md": () => import('./post-3_CVY4Y0gr.mjs'),"./posts/post-4.md": () => import('./post-4_R3NrLljX.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
