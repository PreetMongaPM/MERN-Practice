import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Postlist from "./components/Postlist";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-context";
function App() {

  return (
    <PostListProvider>
      <div className="main-container">
        <Header></Header>
        <div className="sidebarContent">
          <Sidebar></Sidebar>
          <div className="content">
              <Postlist></Postlist>
              <CreatePost></CreatePost>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </PostListProvider>
  );
}

export default App;
