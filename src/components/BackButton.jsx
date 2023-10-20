import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import {BiArrowBack} from "react-icons/bi"

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <button
      className="text-[#89123E] cursor-pointer hover:underline text-lg font-medium px-5 py-2 flex items-center gap-2 rounded-md my-5 mx-3"
      onClick={() => navigate("/")}
    >
      <BiArrowBack size={20} className="text-[#89123E]" />
      back
    </button>
  );
}

export default BackButton