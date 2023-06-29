import React, {useState} from 'react'
import Modal from './Modal';




const Navbar = () => {
const [openModal, setOpenModal] = useState(false)


    const handleAddPost = () =>{
        setOpenModal(!openModal);

    }
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between px-12">
      <p className="text-2xl font-bold">ST</p>
      <button
       className=""
       onClick={() => handleAddPost () }
       >
        <Modal/>
        
        
      </button>
    </div>
  );
}

export default Navbar