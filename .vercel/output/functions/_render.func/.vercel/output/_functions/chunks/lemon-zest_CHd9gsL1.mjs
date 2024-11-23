import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_wY7ncS-m.mjs';

const html = "<p>Refrescante, cítrica y llena de sabor. <strong>Lemon Zest</strong> es una galleta con el equilibrio perfecto entre el dulce y la acidez del limón, realzada con un toque de ralladura de limón fresco.</p>";

				const frontmatter = {"title":"Lemon Zest","description":"Refrescante, cítrica y llena de sabor. **Lemon Zest** es una galleta con el equilibrio perfecto entre el dulce y la acidez del limón, realzada con un toque de ralladura de limón fresco.","img":"image-1.jpg","buy":{"col":"https://www.instagram.com/_naisskicito/","ve":"https://www.instagram.com/_naisskicito/"}};
				const file = "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/lemon-zest.md";
				const url = undefined;
				function rawContent() {
					return "  \r\n\r\nRefrescante, cítrica y llena de sabor. **Lemon Zest** es una galleta con el equilibrio perfecto entre el dulce y la acidez del limón, realzada con un toque de ralladura de limón fresco.  ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
