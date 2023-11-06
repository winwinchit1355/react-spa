import React from 'react';
import logoImg from '../assets/images/logo-social.png';
import styled from 'styled-components';

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

const Li = styled.div`
  text-decoration:none;
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
  return (
    <FlexDiv>
      <LeftDiv>
        <img height="50px" src={logoImg} alt="" />
        <strong style={H1_style}>My App</strong>
      </LeftDiv>
      <RightDiv>
        <UlDiv>
          <Li><a style={ATag_style} href="#">Download</a></Li>
          <Li><a style={ATag_style} href="#">Logout</a></Li>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  )
}
