import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Learn Programming Blog',
    description: 'A blog about learning to program',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_CQx47jEc.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_B1H42R9S.mjs'),"./posts/post-3.md": () => import('./post-3_BvIR8IJD.mjs'),"./posts/post-4.md": () => import('./post-4_CnUPglZ-.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
