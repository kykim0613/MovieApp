import { Link } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import styled from "styled-components"
import { LoggedIn, LoggedUser } from "../atom"
import CreateAccount from "./CreateAccount"
import Auth from "./Auth"

const HeadBox = styled.div`
    width: 800px;
    height:80px;
    margin: 0 auto;
`
const AuthMenuBox = styled.div`
    width: 450px;
    display: flex;
    float: right;
`
const AuthMenu = styled.div`
    width: 150px;
    height: 80px;
    line-height:30px;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items:center;
`
const MenuLine = styled.div`
    width: 100%;
    height: 50px;
    background: #e22a15;
`
const MenuBox = styled.div`
    width: 800px;
    height: 50px;
    display: flex;
    margin: 0 auto;
`
const Menu = styled.div`
    width: 200px;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
`


const Header = () => {
    const user = useRecoilValue(LoggedUser)
    const [loggedOut, setLoggedOut] = useRecoilState(LoggedIn)

    const LoggedOut = () => {
        setLoggedOut(false)
    }
    return (
        <>
            <HeadBox>
                <Link to={'/'}>
                    <img
                        src="data:image/png;base64,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"
                        style={{ width: "100px", cursor: "pointer" }}
                    />
                </Link>
                {loggedOut ? (
                    <AuthMenuBox>
                    <AuthMenu>
                        <Link>
                            {user?.name}님
                        </Link>
                    </AuthMenu>
                    <AuthMenu onClick={LoggedOut} style={{cursor: "pointer"}}>
                            로그아웃
                    </AuthMenu>
                    <AuthMenu>MY CGV</AuthMenu>
                </AuthMenuBox>
                ):(
                    <AuthMenuBox>
                    <AuthMenu>
                        <Link to={'/Auth'}>
                            로그인
                        </Link>
                    </AuthMenu>
                    <AuthMenu>
                        <Link to={'/CreateAccount'}>
                            회원가입
                        </Link>
                    </AuthMenu>
                    <AuthMenu>MY CGV</AuthMenu>
                </AuthMenuBox>
                )}
            </HeadBox>
            <MenuLine>
                <MenuBox>
                    <Menu>
                        <Link to={'/'}>
                            홈
                        </Link>
                    </Menu>
                    <Menu>
                        <Link to={`/Book`}>
                            예약하기
                        </Link>
                    </Menu>
                    <Menu>패스트오더</Menu>
                    <Menu>이벤트</Menu>
                </MenuBox>
            </MenuLine>
        </>
    )
}
export default Header