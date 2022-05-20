import styled from 'styled-components'
import axios from "axios"
import React from 'react'
import { NavigationType, useNavigate } from 'react-router-dom'


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
            </SportHTML>    
        )
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