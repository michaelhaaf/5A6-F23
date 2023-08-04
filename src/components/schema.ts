import { z } from "astro:content";

import { HeadConfigSchema } from '@starlight/schemas/head';
import { PrevNextLinkConfigSchema } from '@starlight/schemas/prevNextLink';
import { TableOfContentsSchema } from '@starlight/schemas/tableOfContents';
import { Icons } from "@starlight/components/Icons"

type IconName = keyof typeof Icons;
const iconNames = Object.keys(Icons) as [IconName, ...IconName[]];

type ImageFunction = () => z.ZodObject<{
	src: z.ZodString;
	width: z.ZodNumber;
	height: z.ZodNumber;
	format: z.ZodUnion<
		[
			z.ZodLiteral<'png'>,
			z.ZodLiteral<'jpg'>,
			z.ZodLiteral<'jpeg'>,
			z.ZodLiteral<'tiff'>,
			z.ZodLiteral<'webp'>,
			z.ZodLiteral<'gif'>,
			z.ZodLiteral<'svg'>,
		]
	>;
}>;

export function customSchema() {
	return ({ image }: { image: ImageFunction }) =>
		z.object({
			/** The title of the current page. Required. */
			title: z.string(),

			/**
			 * A short description of the current page\u2019s content. Optional, but recommended.
			 * A good description is 150\u2013160 characters long and outlines the key content
			 * of the page in a clear and engaging way.
			 */
			description: z.string().optional(),

			/**
			 * Custom URL where a reader can edit this page.
			 * Overrides the `editLink.baseUrl` global config if set.
			 *
			 * Can also be set to `false` to disable showing an edit link on this page.
			 */
			editUrl: z.union([z.string().url(), z.boolean()]).optional().default(true),

			/** Set custom `<head>` tags just for this page. */
			head: HeadConfigSchema(),

			/** Override global table of contents configuration for this page. */
			tableOfContents: TableOfContentsSchema().optional(),

			/**
			 * Set the layout style for this page.
			 * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
			 */
			template: z.enum(['doc', 'splash', 'assignment', 'tutorial']).default('doc'),

			/** Display a hero section on this page. */
			hero: z
				.object({
					/** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
					image: z
						.object({
							/** Alt text for screenreaders and other assistive technologies describing your hero image. */
							alt: z.string().default(''),
							/** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
							file: image().optional(),
							/** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
							html: z.string().optional(),
							/** Optionally specify target width of image */
							width: z.string().optional(),
						})
						.optional(),
					/** An array of call-to-action links displayed at the bottom of the hero. */
					actions: z
						.object({
							/** Text label displayed in the link. */
							text: z.string(),
							/** Value for the link\u2019s `href` attribute, e.g. `/page` or `https://mysite.com`. */
							link: z.string(),
							/** Button style to use. One of `primary`, `secondary`, or `minimal` (the default). */
							variant: z.enum(['primary', 'secondary', 'minimal']).default('minimal'),
							/**
							 * An optional icon to display alongside the link text.
							 * Can be an inline `<svg>` or the name of one of Starlight\u2019s built-in icons.
							 */
							icon: z
								.union([z.enum(iconNames), z.string().startsWith('<svg')])
								.transform((icon) => {
									const parsedIcon = z.enum(iconNames).safeParse(icon);
									return parsedIcon.success
										? ({ type: 'icon', name: parsedIcon.data } as const)
										: ({ type: 'raw', html: icon } as const);
								})
								.optional(),
						})
						.array()
						.default([]),
					/** An optional addition to the hero image: creates a <figure> elem with the specified caption and credti metadata */
					figure: z
						.object({
							/** A string describing the relevance of the <img> element to the rest of the document. Creates a <figcaption> element. */
							caption: z.string().optional(),
							/** Metadata object describing image content. Inspired by https://www.pixsy.com/academy/image-user/image-credits/ */
							credit: z
								.object({
									name: z.string().optional(),
									title: z.string().optional(),
									link: z.string().optional(),
									license: z.string().optional(),
								}),
						})
						.optional(),
				})
				.optional(),

			/**
			 * The last update date of the current page.
			 * Overrides the `lastUpdated` global config or the date generated from the Git history.
			 */
			lastUpdated: z.union([z.date(), z.boolean()]).optional(),

			/**
			 * The previous navigation link configuration.
			 * Overrides the `pagination` global config or the link text and/or URL.

			 */
			prev: PrevNextLinkConfigSchema(),
			/**
			 * The next navigation link configuration.
			 * Overrides the `pagination` global config or the link text and/or URL.
			 */
			next: PrevNextLinkConfigSchema(),

			sidebar: z
				.object({
					/**
					 * The order of this page in the navigation.
					 * Pages are sorted by this value in ascending order. Then by slug.
					 * If not provided, pages will be sorted alphabetically by slug.
					 * If two pages have the same order value, they will be sorted alphabetically by slug.
					 */
					order: z.number().optional(),

					/**
					 * The label for this page in the navigation.
					 * Defaults to the page `title` if not set.
					 */
					label: z.string().optional(),
				})
				.default({}),

			/**
			 * The previous navigation link configuration.
			 * Overrides the `pagination` global config or the link text and/or URL.

			 */
			created: z.date().optional(),
			/**
			 * The next navigation link configuration.
			 * Overrides the `pagination` global config or the link text and/or URL.
			 */
			tags: z.string().array().default([]),

		});
}

