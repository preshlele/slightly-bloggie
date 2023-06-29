import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import AddPost from "./AddPost";
import PostForm from "./PostForm";

const Modal = () => {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <button
        type="button"
        className="py-3 px-6 border rounded-2xl bg-[#89123E] text-white"
        onClick={openModal}
      >
        Create Post
      </button>

      {IsOpenModal && (
        <div className="fixed z-10 inset-0 overflow-auto">
          <div className="flex items-center justify-center  min-h-screen p-4">
            <div className="fixed inset-0 transition-opacit">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white w-96  z-10 rounded-lg p-6 max-w-sm mx-auto">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-bold mb-4 text-left">
                  Modal Content
                </h2>
                <MdClose size={20} onClick={closeModal} />
              </div>
              <div className="">
                <AddPost closeModal={closeModal} />
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
