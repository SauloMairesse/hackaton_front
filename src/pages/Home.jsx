
import styled from 'styled-components';
import React from 'react';
import Sports from '../components/Sports';

export default function Home() {
    return (
        <HomeHTML>
            <Header>
                <div>SportPlus</div>
            </Header>
            <Countent>
                <h1> Esportes Disponíveis </h1>
                <Sports />
            </Countent>
        </HomeHTML>
    );
}

const HomeHTML = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF9F5;
    h1 {
        font-size: 20px;
        margin-bottom: 30px;
        align-self: flex-start;
        font-family: 'Roboto', sans-serif;
    }
`;
const Header = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 60px;
    background-color: #008080;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div {
        color: #fff;
        font-family: 'Roboto';
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
    }
`;
const Countent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    overflow-x: hidden;
`;

const Sport = styled.div`
    display: flex;
    margin-bottom: 15px;
    position: relative;
    img {
        display: flex;
        width: 320px;
        height: 140px;
        border-radius: 15px;
    }
    h2 {
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
`;
