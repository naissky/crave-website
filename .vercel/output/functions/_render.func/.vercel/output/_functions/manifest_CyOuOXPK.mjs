import { e as decodeKey } from './chunks/astro/server_wY7ncS-m.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CzH37ddk.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.14_@types+node@18.19.64_rollup@4.27.3_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/about.kTQ097nD.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/about.kTQ097nD.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/about.kTQ097nD.css"}],"routeData":{"route":"/food/[id]","isIndex":false,"type":"page","pattern":"^\\/food\\/([^/]+?)\\/?$","segments":[[{"content":"food","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/food/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/about.kTQ097nD.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Features.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/food/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/food/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/contact.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/food/[id]@_@astro":"pages/food/_id_.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.14_@types+node@18.19.64_rollup@4.27.3_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/node_modules/.pnpm/astro@4.16.14_@types+node@18.19.64_rollup@4.27.3_typescript@5.7.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/choco-bliss.md?astroContentCollectionEntry=true":"chunks/choco-bliss_C9bs-Y44.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/cookie-mind.md?astroContentCollectionEntry=true":"chunks/cookie-mind_rfdusEf9.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/lemon-zest.md?astroContentCollectionEntry=true":"chunks/lemon-zest_Cr81KBG5.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/choco-bliss.md?astroPropagatedAssets":"chunks/choco-bliss_CMwVeEIh.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/cookie-mind.md?astroPropagatedAssets":"chunks/cookie-mind_BBCADvVs.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/lemon-zest.md?astroPropagatedAssets":"chunks/lemon-zest_Jck4CUL5.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:content-module-imports":"chunks/_astro_content-module-imports_B0nxoYfl.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/choco-bliss.md":"chunks/choco-bliss_Lb_CGALN.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/cookie-mind.md":"chunks/cookie-mind_BcTzgdhv.mjs","C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/lemon-zest.md":"chunks/lemon-zest_CHd9gsL1.mjs","\u0000@astrojs-manifest":"manifest_CyOuOXPK.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/josefin-sans-vietnamese-wght-normal.XnmxeliR.woff2","/_astro/josefin-sans-latin-ext-wght-normal.DLz7JkQq.woff2","/_astro/josefin-sans-latin-wght-normal.DNfcTvW4.woff2","/_astro/playfair-display-cyrillic-wght-normal.Dr2SnCEI.woff2","/_astro/playfair-display-latin-ext-wght-normal.CR05oQ3b.woff2","/_astro/playfair-display-vietnamese-wght-normal.DQ2yjD0Y.woff2","/_astro/playfair-display-latin-wght-normal.BGlevZWC.woff2","/_astro/about.kTQ097nD.css","/favicon.svg","/header.jpg","/hero-img-header.jpg","/image-1.jpg","/image-2.jpg","/image-3.jpg","/image-4.jpg","/image-5.jpg","/image-6.jpg","/_astro/hoisted.BScVxmeO.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"1BH9yVeljzpCCFzbNZDE3FLMCz0ro3EUlET9JvGmV5o=","experimentalEnvGetSecretEnabled":false});

export { manifest };
