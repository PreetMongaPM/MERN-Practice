import { useState } from "react";
import '../App.css'
import axios from 'axios';
import { useEffect } from "react";

const Feed = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/feed')
            .then((res)=>{
                console.log(res);
                setPosts(res.data);
            })
    }, [])
    return (
        <section className="feed-section">
            <h1>Feed</h1>
            {posts.length ? 
            posts.map((post) => (
                <div key={post._id} className="post-card">
                    <img src={post.imageURL} alt="image" />
                    <p>{post.caption}</p>
                </div>
            ))
            :<div className="empty-container">
                <p>Nothing to show here.</p>
            </div>
            }
        </section>
    );
}

export default Feed;