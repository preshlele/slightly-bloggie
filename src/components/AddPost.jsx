import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm"
import { createPost } from "../../api/posts"
import uuid from "react-uuid"

const AddPost = ({closeModal}) => {

  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess : ()=> {
      queryClient.invalidateQueries({queryKey: ['posts']})
      closeModal()
    }
  })

  const handleAddPost = (post) => {
    createPostMutation.mutate(
      {
        id: uuid(),
        ...post
      }
    )
  }
  return (
    <div className="">
        <PostForm onSubmit={handleAddPost} />
      
    </div>
  )
}

export default AddPost