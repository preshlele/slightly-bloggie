import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../../api/posts";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  const {
    isError,
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id) ,
  });

  if (isLoading) return "loading"

    
  
  
  if (isError) return `error: ${error.message}`;

  return (
    <div className="bg-gray-300">
      <button className="bg-red-600" onClick={() =>navigate('/')}>Back to all posts</button>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )
}

export default Posts