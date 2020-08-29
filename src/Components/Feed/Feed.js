import React, { useState, useEffect } from 'react'
import "./Feed.css";
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import db from '../../firebase';
function Feed() {
    const[posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timeStamp',"desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
        })
    }, [])
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map(post=>
            <Post key={post.id} profilePic={post.data.profilePic} username={post.data.username} message={post.data.message} image={post.data.image} timeStamp={post.data.timeStamp}/>
            )}
        </div>
    )
}

export default Feed
