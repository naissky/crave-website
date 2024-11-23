/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_wY7ncS-m.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_D3rqqe4o.mjs';
import { a as $$SectionContainer, b as $$TextHeader, c as $$Layout } from '../../chunks/Layout_2rik_0pm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const food = await getCollection("food");
  return food.map((food2) => ({
    params: { id: food2.slug },
    props: { food: food2 }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { food } = Astro2.props;
  const { data } = food;
  const { title, description, img, buy } = data;
  const { Content } = await renderEntry(food);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Crave Bakery - ${title}`, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "className": "gap-5 text-center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextHeader", $$TextHeader, {}, { "default": ($$result4) => renderTemplate`${title}` })} ${maybeRenderHead()}<div class="text-base flex flex-col gap-2 max-w-2xl text-pretty"> ${renderComponent($$result3, "Content", Content, {})} </div> <img${addAttribute(`/${img}`, "src")} class="max-w-md"${addAttribute(title, "alt")}> ` })} ` })}`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/food/[id].astro", void 0);

const $$file = "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/food/[id].astro";
const $$url = "/food/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
