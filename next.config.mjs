// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: "/vladportfolio",
	images: { unoptimized: true },
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
