import React from "react";

export const themes = {
	light:{
		primary: "#32A041",
		secondary: "#FF1F26",
		secondary_light: "#FF1F26F0",
		primary_gray: "#C1C1C1",
		secundary_gray: "#C4C4C4",
	},
	dark:{
		primary: "#B4B4B4",
		secondary: "#C4C4C4",
		secondary_light: "#C4C4C4F0",
		primary_gray: "#C1C1C1",
		secundary_gray: "#C4C4C4",
	},

};

export const ThemeContext = React.createContext(themes.light);
