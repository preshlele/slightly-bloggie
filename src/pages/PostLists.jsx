import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AddPost from "../components/AddPost";
import { deletePost, fetchAllPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";

const PostLists = () => {
  const navigate = useNavigate();
    const queryClient = useQueryClient();


  const {
    isError,
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["posts"]})
    }
  })

  const handleDelete = (id) => {
    deletePostMutation.mutate(id);
  };

  // if (isLoading) {
  //   console.log("loading all post");
  // }
  // if (isError) {
  //   console.log(`error: ${error.message}`);
  // }

  // console.log(posts);
  return (
    <div className="">
      {posts?.map((post) => (
        <div key={post.id} className="bg-gray-100">
          <h1
            className="hover:bg-slate-200 cursor-pointer"
            onClick={() => navigate(`/post/${post.id}`)}
          >
            {post.title}
          </h1>
          <h2>{post.body}</h2>
          <div className="flex flex-row gap-5 ">
            <button
              onClick={() => navigate(`/post/${post.id}/edit`)}
              className="bg-green-300 px-3 border"
            >
              edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-green-300 px-3 border"
            >
              delete
            </button>
          </div>
        </div>
      ))}
      <AddPost />
    </div>
  );
};

export default PostLists;
