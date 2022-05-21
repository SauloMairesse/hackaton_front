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
    background-color: #9bb5bf;
    h1 {
        width: 100vw;
        margin-left: 20px;
        margin-bottom: 30px;
        text-align: left;
    }
`;
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 60px;
    background-color: #f20732;
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
    margin-top: 30px;

    h1 {
        margin-bottom: 30px;
        font-family: 'Roboto';
        font-size: 20px;
    }
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
