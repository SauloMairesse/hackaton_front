import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sports() {
    const navigate = useNavigate();
    const [sports, setSports] = React.useState([]);

    React.useEffect(() => {
        const URL = 'https://sport-plus-hackathon.herokuapp.com/';
        const promise = axios.get(URL);
        promise.then((response) => {
            setSports([...response.data]);
        });
        promise.catch((err) => console.log('Deu Erro get Sports: ', err));
    }, []);

    function Sport(props) {
        return (
            <SportHTML
                imagem={props.imagem}
                onClick={() => navigate(`/sport/${props._id}`)}
            >
                <div className="gradient">
                    <h2>{props.titulo}</h2>
                </div>
            </SportHTML>
        );
    }

    return (
        <>
            {sports.map((sport) => (
                <Sport
                    key={sport._id}
                    _id={sport._id}
                    imagem={sport.coverURL}
                    titulo={sport.coverTitle}
                />
            ))}
        </>
    );
}

const SportHTML = styled.div`
    display: flex;
    margin-bottom: 15px;
    position: relative;
    width: 320px;
    height: 140px;
    border-radius: 10px;
    background: url(${(props) => props.imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    .gradient {
        position: absolute;
        height: inherit;
        width: 100%;
        border-radius: 10px;
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
