import type {
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "风绘的小窝(Blog)",
	subtitle: "欲买桂花同载酒，终不似，少年游",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},

	// 可在此处配置页脚备案号（留空则不显示）
	beian: "豫ICP备2025139441号",

	// 站点起始运行日期（格式 YYYY-MM-DD），用于在页脚显示已运行天数；留空则不显示
	startDate: "2025-08-08",

	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		//{
		//name: "GitHub",
		//url: "https://github.com/fhowotop/blog", // Internal links should not include the base path, as it is automatically added
		//external: true, // Show an external link icon and will open in a new tab
		//},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q4.qlogo.cn/g?b=qq&nk=3986554524&s=640", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "风绘",
	bio: "欲买桂花同载酒，终不似，少年游",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/fhowotop",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const giscusConfig: GiscusConfig = {
	enable: true,
	repo: "fhowotop/blog",
	repoId: "R_kgDOQMoOow",
	category: "General",
	categoryId: "DIC_kwDOQMoOo84CxSvH",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
