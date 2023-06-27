import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm"
import { editPost, fetchPost } from "../../api/posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const EditPost = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const queryClient = useQueryClient()

  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/")
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

  const handleSubmit = (updatedPost) =>{ 
    editPostMutation.mutate({
     id,
     ...updatedPost
    });
  }

   
  return (
    <div>
        <PostForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default EditPost