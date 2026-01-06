const SideBar = ({handleClickOnHome, handleClickOnCreatePost}) => {
  return (
    <div className="sideBarContainer">
      <button type="button" onClick={handleClickOnHome}>Home</button>
      <button onClick={handleClickOnCreatePost}type="button">Create Post</button>
    </div>
  );
};

export default SideBar;
