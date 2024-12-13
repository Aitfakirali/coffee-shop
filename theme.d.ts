import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface CustomTheme extends Theme {
		status: {
			brown: {
				main: string;
			};
		};
	}
	// allow configuration using `createTheme`
	interface CustomThemeOptions extends ThemeOptions {
		status?: {
			brown?: {
				main: string;
			};
		};
	}
	export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
