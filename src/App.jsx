import './App.css'
import { Navigate, Route , Routes } from 'react-router-dom'
import { Hero } from './pages/Hero'
import { Inicio } from './pages/Inicio'
import { Video } from './pages/Video'
import { Fotografia } from './pages/Fotografia'
import { MotionGraphics } from './pages/MotionGraphics'
import { DisMultimedia } from './pages/DisMultimedia'
import { ProMusical } from './pages/ProMusical'
import { DesarrolloyProgramacion } from './pages/DesarrolloyProgramacion'
import { Contacto } from './pages/Contacto'
import Navbar from './components/Navbar'
import { Redes } from './components/Redes'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Hero></Hero>}></Route>
      <Route path='/inicio' element= { <Inicio></Inicio>}></Route>
      <Route path='/video' element= { <Video></Video>}></Route>
      <Route path='/fotografia' element= {<Fotografia></Fotografia> }></Route>
      <Route path='/motion' element= { <MotionGraphics></MotionGraphics>}></Route>
      <Route path='/multimedia' element= { <DisMultimedia></DisMultimedia>}></Route>
      <Route path='/produccion' element= { <ProMusical></ProMusical>}></Route>
      <Route path='/desarrollo' element= { <DesarrolloyProgramacion></DesarrolloyProgramacion>}></Route>
      <Route path='/contacto' element= { <Contacto></Contacto>}></Route>
      <Route path='/*' element= { <Navigate to={'/'}></Navigate>}></Route>
    </Routes>

    </>
  )
}

export default App
