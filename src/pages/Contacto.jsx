import { Carrusel } from "../components/Carrusel";
import Navbar from "../components/Navbar";
import { Redes } from "../components/Redes";

export const Contacto = () => {
  return (
    <> 
      <Navbar />
      <header className=" pt-24">
        <div className="container bg-transparent border-2 border-gray-100 mx-auto">
          <div></div>
        </div>
        <Redes/>
        <Carrusel 
          titulo= 'CONTACTO'
          num1= '08'
          num2= '00'
          />
      </header>
    </>
  )
}
