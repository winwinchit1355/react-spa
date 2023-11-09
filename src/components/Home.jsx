import React from 'react'
import Nav from './Nav'
import bannerImage from '../assets/images/banner-image.jpg'
import styled from 'styled-components';
import { Button } from '../styles/Shares';

const FlexDiv = styled.div`
  display:flex;
  align-items:center;
`;
const Flex = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    align-items:center;
    padding-top:50px;
`;
const Button = styled.div`
    display:inline-block;
    padding:0.5em 1.45em;
    margin:0.1em;
    border:0.15em solid hotpink;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Segoe UI','Roboto',sans-serif;
    font-weight:400;
    color:#fff;
    background-color:hotpink;
    text-align:center;
    position:relative;
    cursor:pointer;
    border-radius:4px;

    &:hover{
        border-color:blue;
        background-color:blue;
    }
`;

export default function Home() {
  return (
    <div>
        <Nav />
        <FlexDiv>
            <Flex>
                <h1>My Testing</h1>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa ut cumque ea id voluptatem quibusdam ullam temporibus alias deserunt consequuntur tempore maiores ad at, rem incidunt, expedita atque enim!</h4>
                <Button>download apk</Button>
            </Flex>
            <Flex>
                <img src={bannerImage} alt="ads" width="80%" />
            </Flex>
        </FlexDiv>

        <FlexDiv>
            <Flex>
                <img src={bannerImage} alt="ads" width="80%" />
            </Flex>
            <Flex>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse culpa ut cumque ea id voluptatem quibusdam ullam temporibus alias deserunt consequuntur tempore maiores ad at, rem incidunt, expedita atque enim!</p>
            </Flex>
        </FlexDiv>
    </div>
  )
}
