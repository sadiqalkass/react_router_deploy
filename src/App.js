import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import  NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { Route, Routes } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const App = () => {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, isLoading, fetchError } = useAxiosFetch("http://localhost:3500/posts");

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])

  return (
    <div className='App'> 
      <Header title="React Js Blog"  />
      <Nav />
      <Routes>
        <Route path="/" element={
          <Home
          isLoading={isLoading}
          fetchError={fetchError} 
          />} />
        <Route path="/post" element={<NewPost />}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
        <Route path="/post/:id" element={ <PostPage />}/>
        <Route path="/About" element={ <About />}/>
        <Route path="*" element={ <Missing />}/>
      </Routes>
      <Footer />  
    </div>
  )
}

export default App
