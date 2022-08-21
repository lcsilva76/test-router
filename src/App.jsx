import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./components/Home"
import Menu from './components/Menu'
import Produtos from "./components/Produtos"
import Servicos from "./components/Servicos"




export default function App(){

    return(
       <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/servicos" element={<Servicos/>} />
            </Routes>
       </BrowserRouter>
    )
}