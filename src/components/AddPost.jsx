import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm"
import { createPost } from "../../api/posts"
import uuid from "react-uuid"

const AddPost = () => {

  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess : ()=> {
      queryClient.invalidateQueries({queryKey: ['posts']})
      return "success"
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
    <div>
        <h2>Add post</h2>
        <PostForm onSubmit={handleAddPost} />
      
    </div>
  )
}

export default AddPost