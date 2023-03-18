import styled from 'styled-components'
import ReactMarkdown from "react-markdown";

export const ArticleWrapper = styled.div`
  background-color: ${props => props.theme.colors.fifth?.normal};
  font-family: "Fira Code", sans-serif;
  width: 100%;
  padding: 0 2rem;
  
  h1 {
    color: ${props => props.theme.colors.second?.normal};
    font-family: "Ropa Sans", sans-serif;
  }
  
  time {
    color: ${props => props.theme.colors.second?.normal};
    font-family: "Ropa Sans",sans-serif;
  }
`

export const ArticleImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`

export const Markdown = styled.div`
    font-family: "Fira Code", sans-serif;
    font-size: 14px;
    padding: 1rem;
`

export const GitHub = styled.div`
display: flex;
margin: 2rem 0 0.5rem 0;
`

export const GitHubMarker = styled.a`
  decoration: none;
  color: #E4B431 !important;
  font-family: "Ropa Sans", sans-serif;
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 5rem;
`

export const UserPrincipalInformation = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;  
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #E4B431 !important;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
