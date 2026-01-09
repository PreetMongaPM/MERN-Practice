import { IoIosHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Card = ({post}) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src="https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
        {/* {post.tags.map((tag) => {
          <span key={post.id} class="badge rounded-pill text-bg-primary">
            {tag}
          </span>;
        })} */}
        
        {/* //This is for Like icon */}
        <button type="button" class="btn btn-primary">
          <IoIosHeartEmpty />{" "}
          {/* <span class="badge text-bg-secondary">{post.reactions.likes}</span> */}
        </button>

        {/* //This is for views count */}
        <button type="button" class="btn btn-primary">
          <FaEye /> <span class="badge text-bg-secondary">4</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
