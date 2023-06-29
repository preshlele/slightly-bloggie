import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const Popup = ({handleEdit, handleDelete}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className=" text-black font-bold py-4"
        onClick={togglePopup}
      >
        <HiDotsVertical />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
