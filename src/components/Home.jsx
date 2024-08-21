import React from 'react';
import Nav from './Nav';
import flutterImg from '../images/flutter.png';
import programmingImg from '../images/programmingcourse.png';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    margin-top:30px;
`;

const Flex = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Button = styled.button`
    padding:10px 20px;
    border-radius: 5px;
    margin-top:10px;
    background-color: #54C5F8;
    border:none;
    &:hover{
    background-color:#01579B;
    }
`;
export default function Home() {
  return (
    <>
        <Nav />
        <FlexDiv>
            <Flex>
                <h1>Home Page</h1>
                <h4 style={{marginTop:'20px'}}>Professional Computer Programming Class</h4>
                <Button>Download APK</Button>
            </Flex>
            <Flex>
                <img src={flutterImg} alt="ads" height="300px" />
            </Flex>
        </FlexDiv>
        <FlexDiv>
            <Flex>
                <img src={programmingImg} alt="ads" height="300px" />
            </Flex>
            <Flex>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est rerum cum optio facilis illo fugiat provident, voluptatibus asperiores unde ipsa voluptas molestiae iste! Molestias ducimus ratione nulla itaque vel.</p>
            </Flex>
        </FlexDiv>
    </>
  )
}
