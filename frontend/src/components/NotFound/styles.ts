import styled from "styled-components";

export const ComingSoonWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  
  width: 100%;
  padding: 20% 0;
  
  font-family: "Fira Code", sans-serif;
  color: white;
  
  background-image: url("/assets/bg2.jpg");
  background-size: cover;
  
  h1 {
    color: ${props => props.theme.colors.second?.normal}
  }
`