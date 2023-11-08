import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const SectionDiv=styled.section`
  background-color:${(props)=> props.theme.colors.primary};
  display:flex;
  flex-dirction:column;
  
`;
const InputStyle = styled.input`
  display:block;
`;
export default function Login() {
  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <SectionDiv>
        <form action="">
            <label htmlFor="phone">Phone</label>
            
            <InputStyle type="tel" name="phone" />
            
            <label htmlFor="password">Password</label>
            
            <InputStyle type="password" name="password" />
        </form>
      </SectionDiv>
    </div>
  )
}
