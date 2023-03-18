import User from "@/interfaces/User";
import * as S from './styles'
import { getAllUsers, getUserByName, getUserInfo } from "@/utils/api";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';
import { TiLockClosedOutline, TiLockOpenOutline } from "react-icons/ti";

const UserInformation = (props: any) => {
  const username = props.gitHub.split('/')[3];

  return (
  <S.ArticleWrapper>
      <S.Socials>
        <S.Avatar src={"https://avatars.githubusercontent.com/" + username} />
        <h1>{props.name}</h1>
        <S.Socials>
          <S.GitHubMarker href={props.linkedIn} target="_blank" rel="noreferrer">
          <SiLinkedin />
          </S.GitHubMarker>
          <S.GitHubMarker href={props.gitHub} target="_blank" rel="noreferrer">
          <AiFillGithub />
          </S.GitHubMarker>
          <S.GitHubMarker href={"https://twitter.com/" + props.userInformation.twitter_username} target="_blank" rel="noreferrer">
          <AiFillTwitterCircle />
          </S.GitHubMarker>
        </S.Socials>
      </S.Socials>
      <S.GitHub>
        {props.userInformation.bio}
      </S.GitHub>
      <S.UserPrincipalInformation>
        <span>
          <ImLocation />
          {props.userInformation.location}
        </span>
        <span>
        {props.userInformation.hireable 
        ? (
          <>
          <TiLockOpenOutline />
          Available for hire
          </>
        ) 
        : (
          <>
          <TiLockClosedOutline />
          Not available for hire
          </>
        )
        }
        </span>
        <a href={props.userInformation.blog} target="_blank" rel="noreferrer">
          <AiOutlineLink />
          Website
        </a>
      </S.UserPrincipalInformation>
  </S.ArticleWrapper>
)};

export const getStaticPaths = async () => {
  const users = await getAllUsers();
  return {
    paths: users.map((user: User) => `/user/${user.name}`),
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { name } }: any) => {
  const user = await getUserByName(name);
  const userInformation = await getUserInfo(user.gitHub.split('/')[3]);
  return { props: {userInformation, ...user} };
};

export default UserInformation;