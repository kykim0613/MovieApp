import { useState } from "react";
import styled from "styled-components";
import { AuthAndSignInput, Btn, usersArray } from "../atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const SignUpBox = styled.div`
    width: 800px;
    height: 100vh;
    justify-content: center;
    align-items:center;
    margin: 0 auto;
`

const SignUpForm = styled.form`
    width: 400px;
    position: relative;
    top: calc(100vh - 80%);
    left: 50%;
    transform: translateX(-50%);
    text-align:center;
`

const CreateAccount = () => {
    const [name, setNane] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useRecoilState(usersArray)
    const navigate = useNavigate()

    const saveUser = (user) => {
        localStorage.setItem('users', JSON.stringify(user))
    }

    const AuthEmail = (addUser) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === email) {
                return alert("같은 아이디가 이미 존재합니다.")
            }
        }
        alert('회원가입이 완료되었습니다!')
        saveUser(addUser)
        setUsers(addUser)
        navigate('/Auth')
    }

    const handleSignUpForm = (e) => {
        e.preventDefault()
        if (name.length < 1) {
            return alert("최소 2글자 이상 입력해주세요.")
        }
        if (email === "") {
            return alert("아이디를 입력해주세요")
        }
        if (password.length < 8) {
            return alert("8글자 이상 입력해주세요.")
        }
        const addUser = [...users, { date: Date.now(), name: name, id: email, password: password }]
        AuthEmail(addUser)
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    const handleNameInput = (e) => {
        setNane(e.target.value)
    }

    return (
        <SignUpBox>
            <SignUpForm onSubmit={handleSignUpForm}>
                <AuthAndSignInput type="name" placeholder="이름을 입력해주세요." onChange={handleNameInput} />
                <AuthAndSignInput type="email" placeholder="아이디를 입력해주세요." onChange={handleEmailInput} />
                <AuthAndSignInput type="password" placeholder="비밀번호를 입력해주세요." onChange={handlePasswordInput} />
                <Btn>확인</Btn>
                <Btn>취소</Btn>
            </SignUpForm>
        </SignUpBox>
    )
}

export default CreateAccount;