import { useParams } from "react-router-dom";
import { fetchPost } from "../../api/posts";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import background from "../assets/background.jpg";

const Posts = () => {
  const { id } = useParams();

  const {
    isError,
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return "loading";

  if (isError) return `error: ${error.message}`;

  return (
    <div className="bg-gray-50 h-screen">
      <BackButton />
      <div className="my-12 mx-20 flex flex-col items-center h-1/2">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-contain"
        />
        <div className="w-4/5">
          <h1 className="text-3xl w-full font-bold my-3">{post?.title}</h1>
          <p className="text-gray-400 ">{post?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
