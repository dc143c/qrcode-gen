import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            first?: {
                normal: string;
                light: string;
                dark: string;
            };
            second?: {
                normal: string;
                light: string;
                dark: string;
            };
            third?: {
                normal: string;
                light: string;
                dark: string;
            };
            fourth?: {
                normal: string;
                light: string;
                dark: string;
            };
            fifth?: {
                normal: string;
                light: string;
                dark: string;
            };
            background: string;
            text: string;
        };
        fontSizes?: {
            small: string;
            medium: string;
            large: string;
        };
    }

    export interface CustomTheme extends DefaultTheme {
        title: string;
        colors: {
            background: string;
            text: string;
        };
    }
}