import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const SectionDiv = styled.div`
    background-color:${(props)=>props.theme.colors.secondary};
    width:400px;
    margin:30px auto;
    padding: 30px;
    display:flex;
    flex-direction:column;
`;
const H1Style = styled.h1`
    color:'#99b2bf',
    font-size: '14px';
    margin-bottom:20px;
`;
const InputStyle = styled.input`
    display:block;
    width:250px;
    padding:10px;
    margin-bottom:20px;
    border:none;
    &:focus{
        outline:1px solid ${(props)=>props.theme.colors.primary};
    }
`;
const Button = styled.button`
    padding:10px 20px;
    border-radius: 5px;
    margin-top:10px;
    background-color: ${(props)=>props.theme.colors.primary};
    color:white;
    border:none;
    &:hover{
    background-color:#01579B;
    }
`;
export default function Login() {
  return (
    <>
        <Nav />
        <SectionDiv>
            <H1Style>Login to View Home Page</H1Style>
            <form>
                <InputStyle type="tel" placeholder='Phone' />
                <InputStyle type="password" placeholder='Password' />
                <Button>Login</Button>
            </form>
        </SectionDiv>
    </>
  )
}
