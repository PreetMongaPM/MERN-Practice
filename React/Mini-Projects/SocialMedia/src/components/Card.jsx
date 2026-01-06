import { CiHeart } from "react-icons/ci";

const Card = ({postTitle, postCaption, postHashtag}) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src="https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{postTitle}</h5>
        <p class="card-text">
          {postCaption}
        </p>
        <p className="card-text">
            {postHashtag}
        </p>
        <a class="btn btn-primary">
          <CiHeart />
        </a>
      </div>
    </div>
  );
};

export default Card;
