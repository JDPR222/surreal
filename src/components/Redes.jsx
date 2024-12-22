import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";

import React from 'react'

export const Redes = () => {
  return (
    <div className=" absolute bottom-0 right-0  h-[55vh]  rigth-0 w-48">
    <div className="flex flex-col  item-center gap-8 cursor-pointer w-46" >
      <FaFacebook  className="hover:scale-150 w-6 h-6"/>
      <FaYoutube  className="hover:scale-150 w-6 h-6 "/>
      <TiSocialInstagram  className="hover:scale-150 w-6 h-6 "/>
    </div>
  </div>
  )
}
