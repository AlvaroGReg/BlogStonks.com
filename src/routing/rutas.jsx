import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../comps/pages/Inicio';
import { Articulos } from '../comps/pages/Articulos';
import { Crear } from '../comps/pages/Crear';

export const Rutas = () => {
    return (
        <BrowserRouter>

            {/* LAYOUT */}

            {/* Contenido y rutas */}

            <section id='content' className='content'>
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/inicio' element={<Inicio/>}/>
                    <Route path='/articulos' element={<Articulos/>}/>
                    <Route path='/crear' element={<Crear/>}/>
                   
                </Routes>
            </section>
        </BrowserRouter>
    )
}