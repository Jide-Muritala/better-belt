import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_DmWF7RLx.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-kh7btl4r]{color:purple;font-size:4rem}.skill[data-astro-cid-kh7btl4r]{color:var(--skillColor);font-weight:var(--fontWeight);text-transform:var(--textCase)}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/posts/post-3","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-3.md","pathname":"/posts/post-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/posts/post-4","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-4.md","pathname":"/posts/post-4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"a[data-astro-cid-os4i7owy]{color:#00539f}.tags[data-astro-cid-os4i7owy]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-os4i7owy]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\na[data-astro-cid-5grsw2hi]{color:#00539f}.tags[data-astro-cid-5grsw2hi]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-5grsw2hi]{margin:.25em;border:dotted 1px #a1a1a1;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#f8fcfd}\n#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});\n"}],"styles":[{"type":"inline","content":"#themeToggle[data-astro-cid-oemx5le4]{border:0;background:none}.sun[data-astro-cid-oemx5le4]{fill:#000}.moon[data-astro-cid-oemx5le4],.dark .sun[data-astro-cid-oemx5le4]{fill:transparent}.dark .moon[data-astro-cid-oemx5le4]{fill:#fff}a[data-astro-cid-yxtifmrq]{padding:.5rem 1rem;color:#fff;background-color:#4c1d95;text-decoration:none}footer[data-astro-cid-sz7xmlte]{display:flex;gap:1rem;margin-top:2rem}html{background-color:#f1f5f9;font-family:sans-serif}body{margin:0 auto;width:100%;max-width:80ch;padding:1rem;line-height:1.5}*{box-sizing:border-box}h1{margin:1rem 0;font-size:2.5rem}.hamburger{padding-right:20px;cursor:pointer}.hamburger .line{display:block;width:40px;height:5px;margin-bottom:10px;background-color:#ff9776}.nav-links{width:100%;top:5rem;left:48px;background-color:#ff9776;display:none;margin:0}.nav-links a{display:block;text-align:center;padding:10px 0;text-decoration:none;font-size:1.2rem;font-weight:700;text-transform:uppercase}.nav-links a:hover,.nav-links a:focus{background-color:#ff9776}.expanded{display:unset}@media screen and (min-width: 636px){.nav-links{margin-left:5em;display:block;position:static;width:auto;background:none}.nav-links a{display:inline-block;padding:15px 20px}.hamburger{display:none}}html.dark{background-color:#0d0950;color:#fff}.dark .nav-links a{color:#fff}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://better-belt.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/codespaces-blank/better-belt/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/posts/post-3.md",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/posts/post-4.md",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/workspaces/codespaces-blank/better-belt/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Df0ELXWm.mjs","/src/pages/posts/post-2.md":"chunks/pages/post-2_B1H42R9S.mjs","/src/pages/posts/post-3.md":"chunks/pages/post-3_BvIR8IJD.mjs","/src/pages/posts/post-4.md":"chunks/pages/post-4_CnUPglZ-.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_Keo9mV6F.mjs","/src/pages/tags/[tag].astro":"chunks/prerender_D2tmZPwp.mjs","\u0000@astrojs-manifest":"manifest_B3k8QDwA.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BzE8_T2m.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_DMFzx3iD.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_Cldji8ca.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"chunks/post-1_B3BwzZZs.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"chunks/post-2_DUUo1ZZd.mjs","\u0000@astro-page:src/pages/posts/post-3@_@md":"chunks/post-3_BiTm2j_w.mjs","\u0000@astro-page:src/pages/posts/post-4@_@md":"chunks/post-4_BTOaPKar.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_BehsdAJH.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__BFsZgpCR.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_B8R97zpG.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DXaCYb3h.mjs","/workspaces/codespaces-blank/better-belt/src/components/Greeting":"_astro/Greeting.CjLX6G3_.js","/astro/hoisted.js?q=0":"_astro/hoisted.U36sVhwW.js","@astrojs/preact/client.js":"_astro/client.CgUnh2kq.js","/workspaces/codespaces-blank/better-belt/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.B_exu38U.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/Greeting.CjLX6G3_.js","/_astro/client.CgUnh2kq.js","/_astro/hooks.module.D9Sbrd7S.js","/_astro/preact.module.5IcniKGG.js","/_astro/signals.module.B_exu38U.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
