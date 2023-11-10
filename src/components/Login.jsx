import React,{useRef} from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import { Button as ShareButton} from '../styles/Shares';
import { useLoginContext } from './store/LoginContextApi';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const phoneRef = useRef();
  const passRef = useRef();
  const { loggedIn,setLoggedIn} = useLoginContext();
  const loginHandler = (e) =>{
    e.preventDefault();
    let user = {
      phone: phoneRef.current.value,
      password: passRef.current.value
    };
    setLoggedIn(true);
    navigate('/home');
    phoneRef.current.value='';
    passRef.current.value='';
  }
  return (
    <div>
      <Nav />
      <SectionDiv>
      <H1>Login</H1>
        <form onSubmit={loginHandler}>
            <label htmlFor="phone">Phone</label>
            
            <InputStyle type="tel"  ref={phoneRef} />
            
            <label htmlFor="password">Password</label>
            
            <InputStyle type="password"  ref={passRef} />

            <ShareButton type="submit" >Sign In</ShareButton>
        </form>
      </SectionDiv>
    </div>
  )
}
