/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_wY7ncS-m.mjs';
import { a as $$SectionContainer, b as $$TextHeader, c as $$Layout } from '../chunks/Layout_DeVscQME.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crave Bakery | Making Sure you Really Crave It!.", "description": "Making Sure you Really Crave it - Classic with a modern twist. An experience for the thaste buds and the soul" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextHeader", $$TextHeader, {}, { "default": ($$result4) => renderTemplate`
Contact
` })} ` })} ` })}`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/contact.astro", void 0);

const $$file = "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
