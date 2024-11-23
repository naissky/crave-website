import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as renderSlot, b as createAstro, a as renderComponent, k as renderHead } from './astro/server_wY7ncS-m.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`flex flex-col justify-center items-center py-10 md:py-20 px-10 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/ui/SectionContainer.astro", void 0);

const $$TextHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-crave-black text-8xl font-serif not-italic text-pretty"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/ui/TextHeader.astro", void 0);

const $$NavLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-crave-white  py-3 px-10 md:px-20 rounded-2xl shadow-lg"> <ul class="flex flex-row gap-6 font-medium text-lg"> <li> <a class="hover:underline" href="/">Home</a> </li> <li> <a class="hover:underline" href="/about">About</a> </li> <li> <a class="hover:underline" href="/contact">Contact</a> </li> </ul> </div>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/ui/NavLinks.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="w-full py-10 px-5 justify-center sticky top-0 left-0"> <div class="flex justify-center md:justify-between items-center"> <p class="text-[10px] text-pretty max-w-40 hidden md:flex">
VISUAL BRAND DESIGN / ART DIRECTION: LEANDRA RANGEL
</p> ${renderComponent($$result, "NavLinks", $$NavLinks, {})} <p class="text-[10px] text-pretty max-w-40 hidden md:flex">
2024 CRAVE / COFFE SHOP & BAKERY
</p> </div> </nav>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/node_modules/.pnpm/astro@4.16.14_@types+node@22.9.2_rollup@4.27.3_typescript@5.7.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$SubHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-7xl font-serif not-italic text-pretty"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/ui/SubHeader.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "className": "bg-crave-black text-crave-white w-full" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-16 py-44 max-w-3xl text-center justify-center"> ${renderComponent($$result2, "SubHeader", $$SubHeader, {}, { "default": ($$result3) => renderTemplate`
Make sure you really <span class="italic">crave</span> it!
` })} <div class="flex flex-col gap-10 justify-center items-center md:flex-row md:justify-between"> <div class="flex flex-col text-left"> <li>Branding Design: Leandra Rangel</li> <li>Website Develop: Favian Segovia</li> <li>Art Direction: Javier Sequera</li> </div> <div class="flex flex-col text-left"> <li>Follow us in we Social Medias:</li> <li>[Facebook] [Tik Tok]</li> <li>[Instagram] [Linkedin]</li> </div> </div> <h3 class="text-base text-crave-white">
CraveIt! Bakery - 2024 All rights reserved (C)
</h3> </div> ` })}`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-crave-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class=""> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/layouts/Layout.astro", void 0);

export { $$SubHeader as $, $$SectionContainer as a, $$TextHeader as b, $$Layout as c };
