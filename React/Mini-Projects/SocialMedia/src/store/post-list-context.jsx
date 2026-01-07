import {useEffect, useState } from "react";
import { createContext } from "react";

export const postList = createContext({
  posts: [],
  showPosts: "HOME",
  setShowPosts: () => {},
  addOnSubmit: () => {},
  deleteOnClick: () => {},
});

const PostListProvider = ({ children }) => {
  const [showPosts, setShowPosts] = useState("HOME");
  const [posts, setPosts] = useState([]);

//   const handleOnSubmit = ({ postTitle, postCaption, postHashtag }) => {
//     setPosts((currentPosts) => [
//       ...currentPosts,
//       {
//         postTitle: postTitle.current.value,
//         postCaption: postCaption.current.value,
//         postHashtag: postHashtag.current.value,
//       },
//     ]);
//     setShowPosts('HOME');
//   };

  const addOnSubmit = ()=>{

  }
  const deleteOnClick = ()=>{

  }
  
   const fetchingImages = useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => setPosts(obj.posts));
  }, []);

  return (
    <postList.Provider
      value={{ posts, showPosts, setShowPosts, addOnSubmit, deleteOnClick }}
    >
      {children}
    </postList.Provider>
  );
};

export default PostListProvider;
