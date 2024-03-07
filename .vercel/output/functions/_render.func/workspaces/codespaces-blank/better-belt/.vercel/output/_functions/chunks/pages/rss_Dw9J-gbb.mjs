import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Learn Programming Blog',
    description: 'A blog about learning to program',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_DEDA88gE.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_CK6TXcDa.mjs'),"./posts/post-3.md": () => import('./post-3_B_4yJ99q.mjs'),"./posts/post-4.md": () => import('./post-4_Cih75CNn.mjs')})),
    customData: `<language>en-us</language>`,
  });
}

export { GET };
