module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: "#B569D4",
		}),
		textColor: (theme) => ({
			...theme("colors"),
			primary: "#B569D4",
		}),
		borderColor: (theme) => ({
			...theme("colors"),
      primary: "#B569D4",
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
