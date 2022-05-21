import React from "react"
import { Link } from "react-router-dom"
import QuestionQuizz from "../components/QuestionQuizz"
import styled from "styled-components"

export default function Quizz(){
    return(
        <QuizzHTML> 
            <Header>
                <Link to={'/'}><ion-icon name="arrow-back-outline"></ion-icon></Link>
                <h1>SportPlus</h1> 
            </Header>
            <QuestionQuizz/>
        </QuizzHTML>
    )
}

const Header = styled.header`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F20732;

    color: #F2D230;

    position: fixed;
    left: 0;
    top: 0;

    ion-icon{
        position: absolute;
        left: 0;
    }
`
const QuizzHTML = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`