import { useContext, useRef } from "react";
import { postList } from "../store/post-list-context";
import { useEffect } from "react";

const CreatePost = () => {
  // useEffect(()=>{

  //     return ()=>{
  //       console.log('Went out of createPost')
  //     }


  //   });
  const postTitle = useRef("");
  const postCaption = useRef("");
  const postHashtag = useRef("");

  const { addOnSubmit, showPosts } = useContext(postList);

  const onFormSubmit = (event) => {
    event.preventDefault();
  
    let post = {
      title:postTitle.current.value,
      body:postCaption.current.value,
      tags:postHashtag.current.value.split(' '),
      reactions : {
        likes: 100,
        dislikes : 200,
      }
    }
    addOnSubmit(post);
  };
  

  return (
    <>
      {showPosts === "CREATE POST" && (
        <form onSubmit={onFormSubmit}>
          <label htmlFor="imageUpload">Upload Image:</label>
          <br />
          <input className="inputField" type="file" id="imageUpload" />
          <br />
          <label htmlFor="title">Title: </label>
          <br />
          <input
            ref={postTitle}
            type="text"
            className="inputField"
            id="title"
            name="title"
          />
          <br />

          <label htmlFor="caption">Caption: </label>
          <br />
          <input
            ref={postCaption}
            type="text"
            className="inputField"
            id="caption"
            name="caption"
          />
          <br />
          <label htmlFor="hashtags">#:</label>
          <br />
          <input
            ref={postHashtag}
            type="text"
            className="inputField"
            id="hashtags"
            name="hashtags"
          />
          <br />
          <button>Upload</button>
          <br />
        </form>
      )}
    </>
  );
};

export default CreatePost;
