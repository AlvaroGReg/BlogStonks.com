import './App.css'
import { Articulos } from './comps/pages/Articulos'
import { Crear } from './comps/pages/Crear'
import { Inicio } from './comps/pages/Inicio'

function App() {

  return (
    <div className='App'>
      <h1>Blog con React</h1>
      <Inicio/>
      <Articulos/>
      <Crear/>
    </div>
  )
}

export default App
