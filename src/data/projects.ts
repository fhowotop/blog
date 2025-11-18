// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "blog",
		title: "建设我的Blog",
		description:
			"基于Astro框架的个人博客主题，支持多语言、暗黑模式、响应式设计等功能。",
		image: "",
		category: "web",//mobile or other
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.fhowo.top",
		sourceCode: "https://github.com/fhowotop/blog", // 更改为GitHub链接
		visitUrl: "https://blog.fhowo.top", // 添加前往项目链接
		startDate: "2025-08-08",
		endDate: "2025-08-08",
		featured: true,
		tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "aineko_yuji",
		title: "AINeko·雨霁",
		description:
			"你将与名为雨霁的猫娘少女对话，请好好对待她喵~",
		image: "",
		category: "web",
		techStack: ["Next.js"],
		status: "completed",
		liveDemo: "https://aineko.fhowo.top",
		sourceCode: "https://github.com/fhowotop/AI-Neko",
		visitUrl: "https://aineko.fhowo.top", // 添加前往项目链接
		startDate: "2025-10-25",
		endDate: "2025-10-26",
		featured: false,
		tags: ["Portfolio", "AI","NekoChat"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
