import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Sport() {
    const { _id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState('');

    async function getSport() {
        try {
            const sport = await axios.get(
                `https://sport-plus-hackathon.herokuapp.com/${_id}`
            );
            console.log(sport.data);
            setData(sport.data);
        } catch (err) {
            console.log('Deu erro na request: ', err);
        }
    }

    useEffect(() => {
        getSport();
    }, []);

    return (
        <>
            <Header>
                <ion-icon
                    name="arrow-back-outline"
                    onClick={() => navigate(-1)}
                />
                <div>SportPlus</div>
            </Header>

            <Page>
                <h1>{data.coverTitle}</h1>
                <Banner>
                    <p>Regras:</p>
                    <br></br>
                    <p> {data.rules} </p>
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
    );
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
`;
const Page = styled.main`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #9bb5bf;

    margin-top: 90px;

    padding-top: 5vh;

    h1 {
        font-size: 25px;
        margin-bottom: 30px;
        align-self: flex-start;
        font-family: 'Roboto', sans-serif;
        margin-left: 5vw;
    }
`;

const Articles = styled.ul`
    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;

    align-items: center;

    div {
        width: 90vw;
        height: 10vh;

        background-color: #f2d230;
        color: #f20732;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        margin: 2vh 0;

        border-radius: 1vh;

        padding: 2vh;
    }
`;

const Banner = styled.div`
    width: 90vw;
    height: 20vh;

    background-color: #adbf24;

    border-radius: 4vh;

    position: relative;

    padding: 2vh;

    overflow: hidden;

    h2 {
    }

    P {
    }
`;
