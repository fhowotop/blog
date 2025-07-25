import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Fhowo(风绘的小窝)",
	subtitle: "这里是猫猫风绘的随记小窝，风绘学到有趣的技术就在这里分享，很高兴您访问风绘的小窝喵！",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 15, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://t.alcy.cc/fj", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
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
	favicon: [
		// Leave this array empty to use the default favicon
		{
		src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		sizes: '512x512',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
    {
      name: "友人帐",
      url: "/links/",
    },
		{
			name: "GitHub",
			url: "https://github.com/fhowotop/blog", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q4.qlogo.cn/g?b=qq&nk=3986554524&s=640", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "风绘",
	bio: "欲买桂花同载酒，终不似，少年游",
	links: [
		{
			name: "QQ",
			icon: "fa6-brands:qq", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://qm.qq.com/q/2qsWXunL6w",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://b23.tv/M5i84DK",
		},
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

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
