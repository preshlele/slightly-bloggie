import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <button
      className="bg-[#89123E] text-white px-5 py-2 rounded-md my-5 mx-3"
      onClick={() => navigate("/")}
    >
      Back
    </button>
  );
}

export default BackButton