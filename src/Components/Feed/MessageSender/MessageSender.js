import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "./MessageSender.css"
import { useStateValue } from '../../../StateProvider';
import db from '../../../firebase';
import firebase from 'firebase'
function MessageSender() {

    const[{user},dispatch]=useStateValue();
    const[input,setInput]=useState("");
    const[imageUrl,setImage]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input.length>1)
        db.collection('posts').add({
            message:input,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,
            profilePic:user.photoURL,
            image:imageUrl
        })
        setInput("");
        setImage("");
    }
    const handleInput=(e)=>{
        setInput(e.target.value);
    }    
    const handleImage=(e)=>{
        setImage(e.target.value);
    }
    return (
        <div className="messageSender">
            
            <div className="messagesender__top">
            <Avatar src={user.photoURL}/>
                <form>
                <input value={input} onChange={handleInput} className="messageSender__input" placeholder={`what's on your mind, ${user.displayName} ?`}/>
                <input value={imageUrl} onChange={handleImage} placeholder="Image URL(Optional)"/>  
                <button onClick={handleSubmit} type="submit">submit</button>
                </form>
            </div>
            <div className="messagesender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <EmojiEmotionsIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>

    )
}

export default MessageSender
