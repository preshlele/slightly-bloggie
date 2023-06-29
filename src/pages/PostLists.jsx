import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchAllPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import background from "../assets/background.jpg";
import Popup from "../components/Popup";
import { toast } from "react-toastify";

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
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleDelete = (id) => {
    deletePostMutation.mutate(id);
    toast.success("Post deleted")
  };

  const handleEdit = (id) => {
    navigate(`/post/${id}/edit`);
  };

  return (
    <>
      <Navbar />
      <div className="px-12 py-6 overflow-hidden bg-gray-50">
        <p className="text-2xl font-semibold my-3">All Posts</p>
        <div className="grid grid-cols-4 gap-8">
          {posts?.map((post) => (
            <div key={post.id} className=" shadow-md h-96 w-full relative">
              <img
                src={background}
                alt="background"
                className="w-full  object-cover"
              />
              <div className="flex flex-row items-center justify-between px-2">
                <h1 className="font-bold text-xl truncate cursor-pointer">
                  {post.title}
                </h1>
                <Popup
                  handleDelete={() => handleDelete(post.id)}
                  handleEdit={() => handleEdit(post.id)}
                />
              </div>
              <h2 className="text-sm text-gray-500 px-2 block overflow-hidden">
                {post.body.length > 100
                  ? post.body.slice(0, 100) + " ..."
                  : post.body}
              </h2>
              <p
                className="absolute bottom-0 right-0 p-5 cursor-pointer text-sm font-semibold text-[#89123E] hover:underline"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                View
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostLists;
