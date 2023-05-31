import { atom } from "recoil";
import styled from "styled-components";

export const isDarkAtom = atom({
    key: "isDark",
    default: false
})

export const Btn = styled.button`
    width: 100%;
    height: 50px;
    border:none;
    margin-top: 5px;
    margin-right: 10px;
    background: #e22a15;
    color: white;
`

export const AuthAndSignInput = styled.input`
    width: 400px;
    height: 50px;
    outline: none;
    margin-top: 5px;
    text-indent: 10px;
    display: grid;
`

export const usersArray = atom({
    key: "user",
    default: []
})

export const LoggedIn = atom({
    key: "LogIn",
    default: false
})

export const LoggedUser = atom({
    key:"loggedUser",
    default: {}
})