import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sport(){
    return( 
    <>
        <Header>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <h1>SportPlus</h1>
        </Header>

        <Page>
            <Banner>
                <h2>Futebol</h2>

                <p> Jogo pra chutar a bola no gol</p>
            </Banner>

            <Articles>
                <Link to={"/"}>
                    <div>
                        <h3>Regras</h3>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div>
                        <h3>Equipamentos necessários</h3>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div>
                        <h3>Benefícios para Saúde</h3>
                    </div>
                </Link>
            </Articles>
        </Page>
    </> 
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

    ion-icon{
        position: absolute;
        left: 0;
    }
`
const Page = styled.main`
    width: 100vw;
    height: 90vh;

    display: flex;
    flex-direction: column;

    align-items: center;
`

const Articles = styled.ul`
    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;

    align-items: center;

    div{
        width: 90vw;
        height: 10vh;

        background-color: #F2D230;
        color: #F20732;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        margin: 2vh 0;

        border-radius: 1vh;

        padding: 2vh;
    }
`

const Banner = styled.div`
    width: 90vw;
    height: 20vh;

    background-color: #ADBF24;

    margin-top: 15vh;

    border-radius: 4vh;

    position: relative;

    padding: 2vh;


    h2{

    }

    P{

    }
`