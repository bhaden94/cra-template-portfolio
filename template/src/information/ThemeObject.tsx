import { PropTypes } from "@material-ui/core";
import { grey, blue } from "@material-ui/core/colors";

interface ILightDarkTheme {
	primary: string | PropTypes.Color;
	secondary: string | PropTypes.Color;
	background: {
		paper: string | PropTypes.Color;
		default: string | PropTypes.Color;
	};
	text: {
		primary: string | PropTypes.Color;
		secondary: string | PropTypes.Color;
	};
}

export interface IThemeObject {
	light: ILightDarkTheme;
	dark: ILightDarkTheme;
}

/*
	This is used to set custom colors for your portfolios 
	light/dark mode.

	Any valid CSS value will work here
		Ex: "#9c27b0", "purple", "rgb(156,39,176, 1)"
	Or you may import and use Materil-UI colors as in the example
		https://material-ui.com/customization/color/
*/
export function ThemeObject(): IThemeObject {
	return {
		light: {
			primary: grey[900],
			secondary: blue[800],
			background: {
				paper: grey[50],
				default: grey[200],
			},
			text: {
				primary: "rgba(0, 0, 0, 0.87);",
				secondary: "rgba(0, 0, 0, 0.75)",
			},
		},
		dark: {
			primary: grey[600],
			secondary: blue[800],
			background: {
				paper: grey[900],
				default: grey[800],
			},
			text: {
				primary: "#fff",
				secondary: "rgba(255, 255, 255, 0.75)",
			},
		},
	};
}
