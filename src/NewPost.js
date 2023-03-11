import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from 'easy-peasy'

const NewPost = () => {
  const navigate = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost)
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle)
  const setPostBody = useStoreActions((actions) => actions.setPostBody)


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1: 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {id, title:postTitle, dateTime, body:postBody};
    savePost(newPost);
    navigate("/")
  }
  return (
    <main className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor='title'>Title:</label>
          <input
            id='title'
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}/>
            <label htmlFor='body'>Body:</label>
            <textarea
            id='body'
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost