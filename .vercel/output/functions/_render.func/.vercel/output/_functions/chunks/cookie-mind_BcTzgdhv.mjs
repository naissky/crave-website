import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_wY7ncS-m.mjs';

const html = "<p>La galleta artesanal definitiva para quienes buscan sabor, calidad y un impulso de energía creativa. Hecha con ingredientes naturales como chocolate belga, avena orgánica y un toque de vainilla.</p>";

				const frontmatter = {"title":"Cookie Mind","description":"La galleta artesanal definitiva para quienes buscan sabor, calidad y un impulso de energía creativa. Hecha con ingredientes naturales como chocolate belga, avena orgánica y un toque de vainilla.","img":"image-1.jpg","buy":{"col":"https://www.instagram.com/_naisskicito/","ve":"https://www.instagram.com/_naisskicito/"}};
				const file = "C:/Users/destructordetotos/Documents/crave-bakery/crave-bakery-landing-page/src/content/food/cookie-mind.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLa galleta artesanal definitiva para quienes buscan sabor, calidad y un impulso de energía creativa. Hecha con ingredientes naturales como chocolate belga, avena orgánica y un toque de vainilla.\r\n";
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
