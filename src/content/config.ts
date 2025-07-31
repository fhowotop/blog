import { defineCollection, z } from "astro:content";

// 已有的posts集合配置
const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

// 新增spec集合配置（根据实际内容需求调整schema）
const specCollection = defineCollection({
  // 若spec集合下的内容（如friends.md、about.md）有固定格式，可添加schema校验
  // 示例：如果内容包含title和date，可定义为：
  // schema: z.object({
  //   title: z.string(),
  //   date: z.date().optional()
  // }),
  // 若无需校验，可留空
  schema: z.object({}), // 空schema表示不校验内容结构
});

export const collections = {
	posts: postsCollection,
  spec: specCollection, // 添加spec集合
};
