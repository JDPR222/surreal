// import { useState } from 'react'
import "./Hero.css";
import surrealLogo from "/public/assets/images/logo2.png";
import f_abajo from "/public/assets/images/f_abajo.png";


export const Hero = () => {
  return (
    <>
    {/* <section className="h-screen"> */}

      <div className="container">
        <div>
          <h1>SURREAL SOUL</h1>
          <p>PRODUCTORA DE MULTIMEDIA</p>
        </div>

        <div>
          <img src={surrealLogo} className="logo" alt="logo" />
          <a href="/inicio">
            <img src={f_abajo} className="bx-fade-down abajo" alt="logo" />
          </a>
        </div>
      </div>
    {/* </section> */}
    </>
  );
};
