import Card from "./Card";
const Postlist = ({posts})=>{
    return (
        <>
        {posts.map((post, index)=>(<Card key={index} postTitle={post.postTitle} postCaption={post.postCaption} postHashtag={post.postHashtag}></Card>))}
        </>

    );
}

export default Postlist;