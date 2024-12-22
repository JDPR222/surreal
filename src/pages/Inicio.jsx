import { Carrusel } from "../components/Carrusel";
import Navbar from "../components/Navbar";
import { Redes } from "../components/Redes";

export const Inicio = () => {
  return (
    <>
      
      <Navbar />
      <header className=" pt-24">
        <div className="container bg-transparent border-2 border-gray-100 mx-auto overflow-hidden">
          <img className="bg-[center_top_10rem] " src="/public/assets/images/sobremi2.jpg"/>
        </div>
        <Redes/>
        <Carrusel 
          titulo= 'INTRODUCCION'
          num1= '01'
          num2= '02'
          />
      </header>
    </>
  );
};
