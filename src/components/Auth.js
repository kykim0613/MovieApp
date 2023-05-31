import { useEffect, useState } from "react"
import styled from "styled-components"
import { AuthAndSignInput, Btn, LoggedIn, LoggedUser } from "../atom"
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"

const AuthBox = styled.div`
    width: 400px;
    height: 100vh;
    justify-content: center;
    align-items:center;
    margin: 0 auto;
`

const AuthForm = styled.form`아이디 찾기
    width: 400px;
    position: relative;
    top: calc(100vh - 80%);
    left: 50%;
    transform: translateX(-50%);
    text-align:center;
`

const SignUpAndFind = styled.div`
    width:400px;
    height: 50px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
`

const LinkCover = styled.p`
    width:200px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items:center;
`

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Auth, setAuth] = useRecoilState(LoggedIn)
    const [user, setUser] = useRecoilState(LoggedUser)
    const navigate = useNavigate()

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'))
        setUser(users)
    }, [])

    const handleAuthForm = (e) => {
        e.preventDefault()

        for (let i = 0; i < user.length; i++) {
            if (user[i].id === email && user[i].password === password) {
                setAuth(true)
                navigate('/')
                setUser(user[i])
                return
            }
        }
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <AuthBox>
                <AuthForm onSubmit={handleAuthForm}>
                    <AuthAndSignInput type="email" placeholder="아이디를 입력해주세요." onChange={handleEmailInput} />
                    <AuthAndSignInput type="password" placeholder="비밀번호를 입력해주세요." onChange={handlePasswordInput} />
                    <Btn>로그인</Btn>
                    <SignUpAndFind>
                        <Link to={`/CreateAccount`}>
                            <LinkCover>
                                회원가입
                            </LinkCover>
                        </Link>
                        <Link>
                            <LinkCover>
                                아이디/비밀번호 찾기
                            </LinkCover>
                        </Link>
                    </SignUpAndFind>
                </AuthForm>
            </AuthBox>
        </>
    )
}

export default Auth;