import styled from "styled-components";
import { Link, useParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Rules(){
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
                <Link to={`/sport/${_id}`}><ion-icon name="arrow-back-outline"></ion-icon></Link>
                <h1>Regras</h1>
            </Header>

            <Page>
                <p>{data.rules}</p>
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

    font-size: 4vh;

    ion-icon{
        position: absolute;
        left: 0;
    }
`

const Page = styled.main`
    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;

    align-items: center;

    background-color: #9BB5BF;

    margin-top: 10vh;

    padding: 5vh 1vh;

    p{
        white-space: pre-line;
    }
`