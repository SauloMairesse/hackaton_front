import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
export default function QuestionQuizz(){
    
    const {_id} = useParams()
    const [sport, setSport] = React.useState([])

    React.useEffect( () => {
        const URL = `https://sport-plus-hackathon.herokuapp.com/${_id}`
        const promise = axios.get(URL)
        promise.then( (response) => {console.log('entrei')
            setSport([...response.data])} )
        promise.catch( (err) => console.log('Deu Erro get Sports: ',err))   } 
    ,[])
    
    function Question(){
        return (
            <QuestionHTML> 
                <Ask>Pergunta</Ask>
                <Options>
                    <Option>
                        <h1>ola</h1>
                    </Option>
                    <Option>
                        <h1>ola</h1>
                    </Option>
                    <Option>
                        <h1>ola</h1>
                    </Option>
                    <Option>
                        <h1>ola</h1>
                    </Option>
                </Options>
            </QuestionHTML>
        ) 
    }

    return ( 
            <Question/>
            )
}

const QuestionHTML = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 15vh;
        width: 360px;
        background-color: blue;
        `

const Ask = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: red;
    margin-bottom: 20px;
`
const Options = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        background-color: green;
        `
const Option = styled.div`
        display: flex;
        width: 150px;
        height: 150px;
        background-color: aqua;
        margin-bottom: 10px;
        justify-content: center;
        align-items: center;
    `