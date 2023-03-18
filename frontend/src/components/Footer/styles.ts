import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${props => props.theme.colors.fifth?.normal};
  padding: 2rem;
  text-align: center;
  font-family: "Ropa Sans", sans-serif;
  border-radius: 0 0 5px 5px;
  font-size: 13px;
  width: 100%;
  color: ${props => props.theme.colors.text};
  align-content: center;
`