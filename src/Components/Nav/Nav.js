import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

function Nav() {

    const [showSidebar, setShowSidebar] = useState(false)
    
    return (
        <Container>
            <Logo src='/images/logo.svg' />
            <Models>
                <a href='#'>Model S</a>
                <a href='#'>Model Y</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
            </Models>
            <MenuButton onClick={ () => setShowSidebar(true)} >Menu</MenuButton>
            <MS show={showSidebar}></MS>
                <Sidebar show={showSidebar} >
                    <Close onClick={ () => setShowSidebar(false) } >x</Close>
                    <ModelBtn>Model S</ModelBtn>
                    <ModelBtn>Model Y</ModelBtn>
                    <ModelBtn>Model 3</ModelBtn>
                    <ModelBtn>Model X</ModelBtn>
                    <ModelBtn>Solar Panels</ModelBtn>
                    <ModelBtn>Solar Roofs</ModelBtn>
                    <ModelBtn>Existing Inventory</ModelBtn>
                </Sidebar> 
        </Container>
    )
}

export default Nav

const Container = styled.div`
    z-index : 100;
    position : fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 18px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Logo = styled.img`
    height: 15px;
    max-width: 120px;
    flex: 0.2;
`;

const Models = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    a{
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 1px;
        color: black;
        text-decoration: none;
        margin-right: 5px;
    }

    @media screen and (max-width: 720px){
        display: none;
    }
`;

const MenuButton = styled.button`
    background: linear-gradient(to right, rgba(205,205,205,0.4), transparent);
    border: none;
    outline: none;
    height: 30px;
    width: 70px;
    border-radius: 12px;
    padding: 7px;
    font-size: 0.8em;
    font-weight: 530;
    letter-spacing: 0.5px;
    :hover{
        background: radial-gradient(transparent, rgba(255, 255, 255, 0.2))
    }
`;


const Sidebar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0px;
    width: ${props => props.show ? '45%' : '0%'};
    background-color: white;
    z-index: 100;
    opacity: ${props => props.show ? '100%' : '0%'}; 
    transition: all 0.5s;
    padding: ${props => props.show ? '15px ' + '25px' : '0'}; 
`;  


const MS = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: ${props => props.show ? '100vw' : '0px'};
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    transition: all 0.5s;
    filter: opacity(95%) blur(75px);
`;


const Close = styled.button`
    height: 50px;
    width: 100%;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 500;
    padding-right: 5px;
    background-color: transparent;
    border: none;
    outline: none;
    margin-bottom: 20px;
`;


const ModelBtn = styled.button`
    width: 100%;
    height: 38px;
    text-align: left;
    padding-left: 10px;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 550;
    color: grey;
    transition: all 0.5s;

    :hover {
        background-color: rgba(0, 0, 0, 0.07);
        border-radius: 18px;
    }
`;