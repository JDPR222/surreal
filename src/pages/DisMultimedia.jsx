import { Carrusel } from "../components/Carrusel";
import Navbar from "../components/Navbar";
import { Redes } from "../components/Redes";

export const DisMultimedia = () => {
  return (
    <> 
      <Navbar />
      <header className=" pt-24">
        <div className="container bg-transparent border-2 border-gray-100 mx-auto">
          <div></div>
        </div>
        <Redes/>
        <Carrusel 
          titulo= 'DISEÑO MULTIMEDIA'
          num1= '05'
          num2= '06'
          />
      </header>
    </>
  )
}
