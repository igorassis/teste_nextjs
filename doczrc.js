export default {
	htmlContext: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
	themeConfig: {
		codemirrorTheme: 'material',
		// logo: {
		// 	src:
		// 		'https://user-images.githubusercontent.com/10063864/45445171-7d1a6980-b697-11e8-9052-22f7b3c36e94.png',
		// 	width: 232,
		// },
		colors: {
			primary: '#f2f2f2',
			sidebarBg: '#f3f3f3',
		},
		styles: {
			body: {
				fontFamily: "'Roboto', Helvetica Neue, Arial, sans",
				fontSize: 16,
			},
			h1: { fontFamily: "'Product Sans'" },
			h2: { fontFamily: "'Product Sans'" },
			h3: { fontFamily: "'Product Sans'" },
			logo: {
				background: 'red',
				alignItems: 'center',
			},
		},
	},
};
