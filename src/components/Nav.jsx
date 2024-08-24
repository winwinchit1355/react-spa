import logoImg from "../images/logo.jpg";
import styled from 'styled-components';
import { useLoginContext } from "../store/LoginContextApi";
import { Link, useNavigate } from "react-router-dom";

const FlexDiv = styled.div`
    display: flex;
    align-items:center;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    height: 55px;
    padding: 0 20px;
`;

const LeftDiv = styled.div`
    display:flex;
    align-items:center;
    gap:10px
`;

const RightDiv = styled.div`
    flex:1;
    margin-right:50px;
`;

const UlDiv = styled.ul`
    display:flex;
    justify-content:flex-end;
    gap:30px;
`;

const H1_STYLE = {
    color:'#99b2bf',
    fontSize: '18px'
};

const ATAG_STYLE = {
    color:'#fff',
};

const Nav = () => {
    const navigate = useNavigate();
    const {loggedIn,setLoggedIn} = useLoginContext();
    const loginHandle = () =>{
        setLoggedIn(false);
        navigate('/')
    }
    return (
        <FlexDiv className="navbar">
            <LeftDiv>
                <img src={logoImg} height="30px" alt="logo" />
                <strong style={H1_STYLE}>SPA Project</strong>
            </LeftDiv>
            <RightDiv>
                <UlDiv>
                    <li><Link style={ATAG_STYLE} to="/home" >Home</Link></li>
                    <li><a style={ATAG_STYLE} href="#">About</a></li>
                    <li><a style={ATAG_STYLE} href="#">Contact</a></li>
                    <li><a style={ATAG_STYLE} href="#" onClick={loginHandle}>{loggedIn? "Logout":"Login"}</a></li>
                </UlDiv>
            </RightDiv>
        </FlexDiv>
    );
};

export default Nav;