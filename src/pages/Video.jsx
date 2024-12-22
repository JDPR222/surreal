import { Carrusel } from "../components/Carrusel";
import Navbar from "../components/Navbar";
import { Redes } from "../components/Redes";

export const Video = () => {
  return (
    <> 
      <Navbar />
      <header className=" pt-24">
        <div className="container bg-transparent border-2 border-gray-100 mx-auto">
          <div></div>
        </div>
        <Redes/>
        <Carrusel 
          titulo= 'VIDEO'
          num1= '02'
          num2= '03'
          />
      </header>
    </>
  )
}
