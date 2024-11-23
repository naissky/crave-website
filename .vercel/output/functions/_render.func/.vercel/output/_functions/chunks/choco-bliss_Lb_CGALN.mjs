import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_wY7ncS-m.mjs';

const html = "<p>Una explosión de chocolate en cada mordida. Combina tres tipos de chocolate premium: oscuro, con leche y blanco, para crear una galleta irresistible que es puro placer.</p>";

				const frontmatter = {"title":"Choco Bliss","description":"Una explosión de chocolate en cada mordida. Choco Bliss  combina tres tipos de chocolate premium oscuro, con leche y blanco, para crear una galleta irresistible que es puro placer.","img":"image-1.jpg","buy":{"col":"https://www.instagram.com/_naisskicito/","ve":"https://www.instagram.com/_naisskicito/"}};
				const file = "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/choco-bliss.md";
				const url = undefined;
				function rawContent() {
					return "  \r\n\r\nUna explosión de chocolate en cada mordida. Combina tres tipos de chocolate premium: oscuro, con leche y blanco, para crear una galleta irresistible que es puro placer.  \r\n";
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
