import React from 'react';
import logoImg from '../assets/images/logo-social.png';
import styled from 'styled-components';
import { useLoginContext } from './store/LoginContextApi';

const FlexDiv = styled.div`
  display:flex;
  background-color:${(props)=>props.theme.colors.primary};
  align-items:center;
`;

const LeftDiv = styled.div`
  display:flex;
  align-items:center;
`;

const RightDiv = styled.div`
  flex:1;
`;

const UlDiv = styled.div`
  display:flex;
  gap:10px;
  justify-content:flex-end;
  padding:0 10px;
`;

const Li_style = styled.li`
  list-style:none;
  padding:0 10px;

  &:after{
    content:'';
    display:block;
    height:3px;
    background-color:hotpink;
    transform:scaleX(0);
    transition: 300ms;
  }

  &:hover{
    &:after{
      transform:scaleX(1);
    }
  }
`;

const H1_style = {
  marginLeft: '5px',
  color:"blue"
};

const ATag_style = {
  color:"hotpink",
  padding:"0 5px"
};

export default function Nav() {
  const {loggedIn, setLoggedIn} = useLoginContext();
  const logout = () =>{
    setLoggedIn(false);
  }
  return (
    <FlexDiv>
      <LeftDiv>
        <img height="50px" src={logoImg} alt="" />
        <strong style={H1_style}>My App</strong>
      </LeftDiv>
      <RightDiv>
        <UlDiv>
          <Li_style><a style={ATag_style} href="#">Download</a></Li_style>
          {
            loggedIn?<Li_style onClick={logout}><a style={ATag_style} href="#">Logout</a></Li_style>:<Li_style ><a style={ATag_style} href="#">Login</a></Li_style>
          }
          
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  )
}
