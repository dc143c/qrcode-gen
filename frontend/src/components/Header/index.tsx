import * as S from './styles';
import Logotype from 'public/assets/tiny-logo.svg'
import {IoLogoBitcoin} from "react-icons/io";
import {BsPersonFill} from "react-icons/bs";
import {useRouter} from "next/router";

export const Header = () => {
    const route = useRouter();
    const routeName = route.asPath;

    function navigateTo(path: string){
       return route.push(path);
    }

    return (
        <S.HeaderWrapper>
            <S.HeaderLogotype>
                Resume
            </S.HeaderLogotype>
            <S.HeaderMenu>
                <ul>
                    <S.PageLink onClick={() => navigateTo('/')} active={routeName == '/'}>Home</S.PageLink>
                </ul>
            </S.HeaderMenu>
        </S.HeaderWrapper>
    )
}