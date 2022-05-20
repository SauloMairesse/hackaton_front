import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sport from './pages/Sport'

export default function App(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sport' element={<Sport/>}/>
                </Routes>
            </BrowserRouter>
    )
}