import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import { Button } from '../styles/Shares';

const SectionDiv=styled.section`
  background-color:${(props)=> props.theme.colors.primary};
  display:flex;
  flex-direction:column;
  width:500px;
  margin:10px auto;
  padding: 10px 20px;
  align-items:center;
  justify-content:center;
`;
const InputStyle = styled.input`
  display:block;
  width:250px;
  padding:10px 10px;
  margin-bottom:10px;
  border:none;
  &:focus{
  outline:1px solid #ddd;
}
`;

const H1 = styled.h1`
  margin:20px 0;
`;
export default function Login() {
  return (
    <div>
      <Nav />
      <SectionDiv>
      <H1>Login</H1>
        <form action="">
            <label htmlFor="phone">Phone</label>
            
            <InputStyle type="tel" name="phone" />
            
            <label htmlFor="password">Password</label>
            
            <InputStyle type="password" name="password" />

            <Button>Sign In</Button>
        </form>
      </SectionDiv>
    </div>
  )
}
