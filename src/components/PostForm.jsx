/* eslint-disable react/prop-types */
import { useRef } from "react";

const PostForm = ({ onSubmit, initialVal }) => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    onSubmit({ title, body });
    console.log("Input from user:", title, body);
  };

  return (
    <div className="">
      <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          ref={titleRef}
          name="title"
          id="title"
          placeholder="Enter the title"
          className="border"
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          ref={bodyRef}
          name="body"
          id="body"
          placeholder="Enter the body"
          className="border"
        />

        <button type="submit" className="bg-gray-300 px-5">
          Post message
        </button>
      </form>
    </div>
  );
};

export default PostForm;
