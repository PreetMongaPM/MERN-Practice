import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Postlist from "./components/Postlist";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const handleOnSubmit = ({ postTitle, postCaption, postHashtag }) => {
    setPosts((currentPosts) => [
      ...currentPosts,
      {
        postTitle: postTitle.current.value,
        postCaption: postCaption.current.value,
        postHashtag: postHashtag.current.value,
      },
    ]);
    setShowPosts(true);
  };

  const handleClickOnHome = ()=>{
    setShowPosts(true);
  }

  const handleClickOnCreatePost=()=>{
    setShowPosts(false);
  }


  return (
    <div className="main-container">
      <Header></Header>
      <div className="sidebarContent">
        <Sidebar handleClickOnHome={handleClickOnHome} handleClickOnCreatePost={handleClickOnCreatePost}></Sidebar>
        <div className="content">
          {showPosts?<Postlist posts={posts}></Postlist>:<CreatePost handleOnSubmit={handleOnSubmit}></CreatePost>}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
