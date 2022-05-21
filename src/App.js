import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sport from './pages/Sport'
import Rules from './pages/Rules'
import Benefits from './pages/Benefits'
import Materials from './pages/Materials'
import Quizz from './pages/Quizz'

export default function App(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sport/:_id' element={<Sport/>}/>
                    <Route path='/sport/:_id/rules' element={<Rules/>} />
                    <Route path='/sport/:_id/benefits' element={<Benefits/>} />
                    <Route path='/sport/:_id/materials' element={<Materials/>} />
                    <Route path='/sport/:_id/quizz' element={<Quizz/>} /> 
                </Routes>
            </BrowserRouter>
    )
}