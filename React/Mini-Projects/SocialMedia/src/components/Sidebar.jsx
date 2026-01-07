import { useContext } from "react";
import { postList } from "../store/post-list-context";

const SideBar = () => {
  const {setShowPosts } = useContext(postList);
  return (
    <div className="sideBarContainer">
        <button type="button" onClick={()=>setShowPosts("HOME")}>
          Home
        </button>
        <button onClick={()=>setShowPosts("CREATE POST")} type="button">
          Create Post
        </button>
    </div>
  );
};

export default SideBar;
