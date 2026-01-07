import { useContext, useRef } from "react";
import { postList } from "../store/post-list-context";

const CreatePost = ({handleOnSubmit}) => {
    const postTitle = useRef('');
    const postCaption = useRef('');
    const postHashtag= useRef('');

    const onFormSubmit = (event)=>{
        event.preventDefault();
        handleOnSubmit({postTitle, postCaption, postHashtag})

      }
    const {showPosts} = useContext(postList);

                         
    return (
    <>{showPosts === 'CREATE POST' && 
    <form onSubmit={onFormSubmit}>
      <label htmlFor="imageUpload">Upload Image:</label>
      <br />
      <input className="inputField" type="file" id="imageUpload" />
      <br />
      <label htmlFor="title">Title: </label>
      <br />
      <input ref={postTitle} type="text" className="inputField" id="title" name="title" />
      <br />

      <label htmlFor="caption">Caption: </label>
      <br />
      <input ref={postCaption} type="text" className="inputField" id="caption" name="caption"/>
      <br />
      <label htmlFor="hashtags">#:</label>
      <br />
      <input ref={postHashtag} type="text" className="inputField" id="hashtags" name="hashtags"/>
      <br />
      <button >Upload</button>
      <br />
    </form>}
  </>
  );
};

export default CreatePost;
