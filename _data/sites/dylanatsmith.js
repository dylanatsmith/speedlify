module.exports = {
	name: "dylanatsmith.com", // optional, falls back to object key
	description: "Personal web site",
	options: {
		frequency: 60 * 23, // 23 hours
		freshChrome: "site"
	},
	urls: [
		"https://www.dylanatsmith.com/",
		// Top posts
		"https://dylanatsmith.com/wrote/boxed-in",
		"https://dylanatsmith.com/wrote/democratisation-of-knowledge-in-a-capitalist-industry",
		"https://dylanatsmith.com/wrote/case-study-redesigning-and-refactoring-an-enterprise-web-app",
		"https://dylanatsmith.com/wrote/a-million-email-geeks-on-a-million-keyboards",
		// RSS feed
		"https://dylanatsmith.com/feed.xml",
	]
};