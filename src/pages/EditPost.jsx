import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { editPost, fetchPost } from "../../api/posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import editImg from "../assets/background-edit.jpg";
import BackButton from "../components/BackButton";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });

  const {
    isError,
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: fetchPost(id),
  });

  const handleSubmit = (updatedPost) => {
    editPostMutation.mutate({
      id,
      ...updatedPost,
    });
  };

  return (
    <>
      <div className="absolute top-0">
        <BackButton />
      </div>
      <div className="flex flex-row h-screen">
        <div className="flex-1 w-full">
          <img
            src={editImg}
            alt="background-edit"
            className="object-cover h-full w-screen"
          />
        </div>
        <div className="flex-1">
          <div className="mx-36 mt-20">
            <PostForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
