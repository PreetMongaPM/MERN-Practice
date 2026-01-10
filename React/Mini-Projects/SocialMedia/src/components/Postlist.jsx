import { useContext } from "react";
import Card from "./Card";
import { postList } from "../store/post-list-context";
const Postlist = () => {
  const { posts, showPosts} = useContext(postList);
  return (
    <>
   {showPosts ==='HOME'&& posts.map((post, index) => (
        <Card
          key={index}
          post={post}
        ></Card>
      ))}
    </>
  );
};

export default Postlist;
