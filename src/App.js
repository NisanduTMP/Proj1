import React from "react";
import Career from "./pages/career/Career.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Career/>}/>

            </Routes>
        </BrowserRouter>
    )
}