/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: 'picsum.photos',
			},
		],
	},
};

module.exports = nextConfig;