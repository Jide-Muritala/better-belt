export { renderers } from '../renderers.mjs';

const page = () => import('./pages/blog_B0P03BRD.mjs').then(n => n.b);

export { page };
