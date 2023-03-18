import { DefaultTheme, CustomTheme } from 'styled-components';
import dark from './dark';
import light from './light';

const defaultTheme = {
    colors: {
        first: {
            normal: '#EFCB68',
        },
        second: {
            normal: '#F9F4C7',
        },
        third: {
            normal: '#AEB7B3',
        },
        fourth: {
            normal: '#000411',
        },
        fifth: {
            normal: '#160C28',
        },
        background: '#E4B431',
        text: '#EFCB68',
    },
    fontSizes: {
        small: '16px',
        medium: '18px',
        large: '20px',
    },
};

function combineTheme(theme: CustomTheme): DefaultTheme {
    return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };