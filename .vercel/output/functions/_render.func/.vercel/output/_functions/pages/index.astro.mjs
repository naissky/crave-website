/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, a as renderComponent, d as addAttribute, b as createAstro } from '../chunks/astro/server_wY7ncS-m.mjs';
import { b as $$TextHeader, a as $$SectionContainer, c as $$Layout } from '../chunks/Layout_2rik_0pm.mjs';
import { g as getCollection } from '../chunks/_astro_content_D3rqqe4o.mjs';
import { $ as $$Us } from '../chunks/Us_CzpAE6FN.mjs';
export { renderers } from '../renderers.mjs';

const $$TextParraf = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p class="text-crave-black text-2xl text-pretty"> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/ui/TextParraf.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="text-center"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, { "className": "gap-5" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col max-w-3xl gap-14"> ${renderComponent($$result2, "TextHeader", $$TextHeader, {}, { "default": ($$result3) => renderTemplate`
Making sure you really <span class="italic">crave</span> it!
` })} ${renderComponent($$result2, "TextParraf", $$TextParraf, {}, { "default": ($$result3) => renderTemplate`
CLASSIC WITH A MODERN TWIST. AN EXPERIENCE FOR THE THASTE BUDS AND THE SOUL.
` })} </div> <img src="/hero-img-header.jpg" alt="Hero Image" class="w-full"> ` })} </header>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Hero.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "className": "bg-crave-rose" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center"> <img src="/image-4.jpg" class="w-full" alt="Fresh Crave"> </div> ` })}`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Cta.astro", void 0);

const $$Astro = createAstro();
const $$CardFood = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFood;
  const { src, title, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-start items-start rounded-xl py-7 px-2 gap-3 max-w-xs"> <img${addAttribute(src, "src")} class="w-full"> <h3 class="text-2xl font-black text-pretty"> ${title} </h3> <p class="text-base"> ${renderSlot($$result, $$slots["default"])} </p> <a class="w-full text-center bg-crave-rose text-crave-black rounded-lg font-medium px-5 py-3 hover:bg-crave-black hover:text-crave-white ease-out duration-150"${addAttribute(link, "href")}>Comprar</a> </div>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/ui/CardFood.astro", void 0);

const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const food = await getCollection("food");
  console.log(food);
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "className": "gap-5" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-center font-bold text-7xl">COOKIES MENU</h2> <div class="flex flex-col md:flex-row flex-wrap md:gap-10 justify-center items-center"> ${food.map((food2) => {
    const { slug, data } = food2;
    const { title, description, img, buy } = data;
    return renderTemplate`<a class="p-2 hover:shadow-2xl ease-in-out duration-300 rounded-xl"${addAttribute(`/food/${slug}`, "href")}> ${renderComponent($$result2, "CardFood", $$CardFood, { "src": img, "title": title, "link": `/food/${slug}` }, { "default": ($$result3) => renderTemplate`${description}` })} </a>`;
  })} </div> ` })}`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Features.astro", void 0);

const $$Bye = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <img src="/image-6.jpg" alt="" class="w-full"> </div>`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/components/Bye.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crave Bakery | Making Sure you Really Crave It!.", "description": "Making Sure you Really Crave it - Classic with a modern twist. An experience for the thaste buds and the soul" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Cta", $$Cta, {})} ${renderComponent($$result2, "Us", $$Us, {})} ${renderComponent($$result2, "Bye", $$Bye, {})} ` })}`;
}, "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/index.astro", void 0);

const $$file = "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
