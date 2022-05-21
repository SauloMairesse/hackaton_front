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
            {data ? (
                <Page>
                    <Banner
                        _id={data._id}
                        imagem={data.coverURL}
                        titulo={data.coverTitle}
                    />

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
            ) : (
                <></>
            )}
        </>
    );
}

function Banner(props) {
    const navigate = useNavigate();
    return (
        <BannerHTML
            imagem={props.imagem}
            onClick={() => navigate(`/sport/${props._id}`)}
        >
            <div className="gradient">
                <h2>{props.titulo}</h2>
            </div>
        </BannerHTML>
    );
}

const BannerHTML = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 140px;
    background: url(${(props) => props.imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    .gradient {
        position: absolute;
        height: inherit;
        width: 100%;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
        );
    }
    h2 {
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
    }
`;

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
    background-color: #008080;
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
    padding: 0 5vw;
    position: relative;
    width: 100vw;
    padding-top: 170px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff9f5;

    margin-top: 60px;

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

        background-color: #008080;
        color: #fff;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        margin: 2vh 0;

        border-radius: 1vh;

        padding: 2vh;
    }
`;
