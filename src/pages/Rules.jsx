import styled from "styled-components";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Rules(){
    const {_id} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState("");

    async function getSport(){
        try{
            const sport = await axios.get(`https://sport-plus-hackathon.herokuapp.com/${_id}`);
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
                <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}/>
                <div>Regras</div>
            </Header>

            <Page>
                <p>{data.rules}</p>
            </Page>
        </>
    )
}

const Header = styled.header`
    ion-icon {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 60px;
        background-color: #f20732;
        color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    div {
        font-family: 'Roboto';
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
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