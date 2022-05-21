import styled from "styled-components";
import { Link, useParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sport(){
    const {_id} = useParams();

    const [data, setData] = useState("");

    async function getSport(){
        try{
            const sport = await axios.get(`https://sport-plus-hackathon.herokuapp.com/${_id}`);
            console.log(sport.data);
            setData(sport.data);
        }
        catch(err){
            console.log("Deu erro na request: ", err);
        }
    }

    useEffect(() => {
        getSport();
    },[]);


    return( 
    <>
        <Header>
            <Link to={'/'}><ion-icon name="arrow-back-outline"></ion-icon></Link>
            <h1>SportPlus</h1>
        </Header>

        <Page>
            <Banner>
                <h2>{data.coverTitle}</h2>

                <p> {data.coverText} </p>
            </Banner>

            <Articles>
                <Link to={`/sport/${_id}/rules`}>
                    <div>
                        <h3>Regras</h3>
                    </div>
                </Link>
                <Link to={`/sport/${_id}/materials`}>
                    <div>
                        <h3>Equipamentos necessários</h3>
                    </div>
                </Link>
                <Link to={`/sport/${_id}/benefits`}>
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
    left: 0;
    top: 0;

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

    background-color: #9BB5BF;

    margin-top: 10vh;

    padding-top: 5vh;
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

    border-radius: 4vh;

    position: relative;

    padding: 2vh;

    overflow: hidden;

    h2{

    }

    P{

    }
`