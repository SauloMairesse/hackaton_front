import styled from 'styled-components'
import axios from "axios"
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Sports(){
    const navigate = useNavigate()
    const [sports, setSports] = React.useState([])

    React.useEffect( () => {
        const URL = 'https://sport-plus-hackathon.herokuapp.com/'
        const promise = axios.get(URL)
        promise.then( (response) => {setSports([...response.data])} )
        promise.catch( (err) => console.log('Deu Erro get Sports: ',err))   } 
    ,[])

    function Sport(props){
        return (
            <SportHTML onClick={ () => navigate(`/sport/${props._id}`) }>
                <img src={props.imagem} alt="Imagem Futebol" />
                <h2>{props.titulo}</h2>
            </SportHTML>    )
    }

    return(
        <> 
        {sports.map( sport =>   <Sport  key={sport._id}
                                        _id={sport._id}
                                        imagem={sport.coverURL}
                                        titulo={sport.coverTitle}
                                        />) }
        </>
    )
}

const SportHTML = styled.div`
    display: flex;
    margin-bottom: 15px;
    position: relative;
    img{
        display: flex;
        object-fit: cover;
        width: 320px;
        height: 140px;
        border-radius: 15px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url(image.png);
        border-radius: 5px;
    }
    h2{
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 22px;
        font-weight: 600;
    }
`