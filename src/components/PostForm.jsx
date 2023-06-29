/* eslint-disable react/prop-types */
import { useRef } from "react";
import { toast } from "react-toastify";


const PostForm = ({ onSubmit }) => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    onSubmit({ title, body });
    toast.success("Post created successfully")
  };

  return (
    <div className="">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label htmlFor="title" className="text-left text-lg font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          ref={titleRef}
          name="title"
          id="title"
          placeholder="Enter title of blog"
          className="border h-12 px-2 rounded-lg mb-3 focus:outline-none text-gray-500"
        />
        <label htmlFor="body" className="text-left text-lg font-bold mb-2">
          Body
        </label>
        <textarea
          type="text"
          ref={bodyRef}
          name="body"
          id="body"
          placeholder="What's on your mind?"
          className="border text-gray-500 w-full h-52 mb-5 rounded-lg  focus:outline-none p-2 resize-none "
          required
        />

        <button type="submit" className="bg-[#89123E] text-white px-5 py-3 rounded-md">
          Post message
        </button>
      </form>
    </div>
  );
};

export default PostForm;
