import styled, {css} from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border-radius: 5px  5px 0 0;
  padding: 2rem 4rem;
  width: 100%;
  background-color: ${props => props.theme.colors.fifth?.normal};
`

export const HeaderMenu = styled.div`
  text-align: right;
  align-content: end;
  display: flex;
  gap: 1rem;
  justify-content: end;
    
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    font-family: 'Ropa Sans';
    font-weight: normal;
    
    @media(min-width: 900px){
      &:first-child {
        margin-right: 2rem;
      } 
    }
  }
  
`

export const HeaderLogotype = styled.div`
  text-align: left;
  align-content: start;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  font-family: 'Fira Code';
  font-weight: bold;
  font-size: 1rem;
  line-height: 14px;
  color: #E4B431;
  
  span {
    display: none;  
  }
  
  &:hover {
    span {
      display: flex;
      animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  }
  .logotype {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;
  }
`

export const PageLink = styled.li<{active: boolean}>`
  display: flex;
  font-size: 1rem;
  cursor: pointer;
  justify-self: center;
  align-content: center;
  gap: 0.2rem; 
    
    ${props => props.active ? css`
        color: ${props => props.theme.colors.text};
    ` : css`
        color: ${props => props.theme.colors.second?.normal};
    `}
      
    a {
      text-decoration: none;
    }
`