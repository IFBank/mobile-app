import React from "react";

export const themes = {
	light: {
		linear: {
			primary: ["#32DC32", "#6BE32B"], // green
			secondary: ["#5E45CC", "#4250E3"], // purple
			semantic_red: ["#FF1F26", "#FF5512"], // red
			neutral: ["#3B3A3E", "#373739"], // black
		},
		text: {
			title: "#1A1A1A",
			text: "#333333",
		},
		background: "#FEFFFE",
		semantic_disable: "#d4d5d4",	
	},

	dark: {
		linear: {
			primary: ["#3B3A3E", "#373739"], // green
			secondary: ["#5E45CC", "#4250E3"], // purple
			semantic_red: ["#FF1F26", "#FF5512"], // red
			neutral: ["#3B3A3E", "#373739"], // black
		},
		text: {
			title: "#1A1A1A",
			text: "#333333",
		},
		background: "#FEFFFE",
		semantic_disable: "#d4d5d4",
	}
	
};
export const ThemeContext = React.createContext(themes.light);
