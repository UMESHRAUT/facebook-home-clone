import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import "./Post.css"
function Post({profilePic,username,message,image,timeStamp}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                <ThumbUpAltIcon/>
                <p>Like</p>
                </div>
                <div className="post__option">
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
