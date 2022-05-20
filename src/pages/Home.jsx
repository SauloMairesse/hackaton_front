import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Sports from '../components/Sports'
export default function Home(){

    const navigate = useNavigate()

    return( 
    <HomeHTML>
        <Header>
            SportPlus
        </Header>
        <Countent>
            <h1> Esportes Disponíveis </h1>
            <Sports/>
        </Countent>
    </HomeHTML> )
} 

const HomeHTML = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #9BB5BF;
    h1{
        width: 100vw;
        margin-left: 20px;
        margin-bottom: 30px;
        text-align: left;
    }
`
const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    justify-content: center;
    align-items: center;
    width: 100vh;
    height: 10vh;
    background-color: #F20732;
`
const Countent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

const Sport = styled.div`
    display: flex;
    margin-bottom: 15px;
    position: relative;
    img{
        display: flex;
        width: 320px;
        height: 140px;
        border-radius: 15px;
    }
    h2{
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
`