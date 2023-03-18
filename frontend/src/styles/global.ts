import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'),
    url('/fonts/FiraCode-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'),
    url('/fonts/FiraCode-SemiBold.woff') format('woff');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'),
    url('/fonts/FiraCode-Light.woff') format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'),
    url('/fonts/FiraCode-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 800;
  }
  
  @font-face {
    font-family: 'Ropa Sans';
    src: local('Ropa Sans'),
    url('/fonts/RopaSans-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Ropa Sans';
    src: local('Ropa Sans'),
    url('/fonts/RopaSans-Italic.woff') format('woff');
    font-style: italic;
    font-weight: 500;
  }
  
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    outline: 0;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    background: ${props => props.theme.colors.background} !important;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes?.small};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  .link {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
  
`;