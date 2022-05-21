import styled from 'styled-components'
import axios from "axios"
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sports(){
    
    const [sports, setSports] = React.useState([])

    const navigate = useNavigate();

    React.useEffect( () => {
        const URL = 'https://sport-plus-hackathon.herokuapp.com/'
        const promise = axios.get(URL)
        promise.then( (response) => {setSports(...response.data)} )
        promise.catch( (err) => console.log('Deu Erro get Sports: ',err))   } 
    ,[])

    function Sport(){
        return (
            <Sport onClick = {() => navigate('/sport')}>
                <img src="data:image/jpeg;base64,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
                XZERMNEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREoRESBERAREQEREBERAREQEREBERA
                //2Q==" alt="" />
                <h2>Futebol de Campo</h2>
            </Sport>    
        )
    }

    return(
        sports.map( sport => <Sport /> )
    )
}

const Sport = styled.div`
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