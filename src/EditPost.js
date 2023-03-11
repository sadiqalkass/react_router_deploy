import { useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { format } from "date-fns";
import api from "./api/posts"
import { useStoreState, useStoreActions } from 'easy-peasy'

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams()


  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost)
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle)
  const setEditBody = useStoreActions((actions) => actions.setEditBody)

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);


  useEffect(() => {
      if(post) {
          setEditTitle(post.title)
          setEditBody(post.body)
      }
  },[post , setEditTitle, setEditBody])

  const handleEdit = (id) => {
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {id, title:editTitle, dateTime, body:editBody};
    editPost(updatedPost);
    navigate(`/post/${id}`); 
  }

  return (
    <main className='NewPost'>
        {editTitle &&
            <>
                <h2>Update Post</h2>
                <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='title'>Title:</label>
                <input
                    id='title'
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}/>
                    <label htmlFor='body'>Body:</label>
                    <textarea
                    id='body'
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}/>
                    <button type='button' onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {!editTitle &&
            <>
              <h2>Post not Found</h2>
              <p>Well that's disapponting</p>
              <p>
                <Link to="/">Vist our Homepage</Link>
              </p>
            </>
          }
    </main>
  )
}

export default EditPost
