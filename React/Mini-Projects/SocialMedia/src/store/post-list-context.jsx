import { useEffect, useState } from "react";
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

  const addOnSubmit = (post) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I am in love with someone.",
        userId: 5,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        console.log('Post Created');
        console.log(resObj);
        setPosts((currentPosts) => [ resObj, ...currentPosts]);
        setShowPosts("HOME");
      });
  };

  const deleteOnClick = () => {};

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => setPosts(obj.posts));

    return () => {
      console.log("went out");
    };
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
