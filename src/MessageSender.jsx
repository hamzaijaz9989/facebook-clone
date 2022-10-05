import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React,{useState} from 'react'
import "./MessageSender.css"
import { useStateValue } from './StateProvider'
import firebase from 'firebase/compat/app';
import db from './firebase'
function MessageSender() {
    const [{user},dispatch]=useStateValue('')
    const [val,setVal]=useState("")
    const [imgUrl,setimgUrl]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection("Posts").add({
            message:val,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image: imgUrl,
        });
        setVal("");
        setimgUrl("")

    }
    const inputValue=(event)=>{
        setVal(event.target.value)
    }
    const imgInputVal=(event)=>{
        setimgUrl(event.target.value)
    }
  return (
    <div className='messageSender'>
    <div className='msgSendTop'>
        <Avatar src={user.photoURL}/>
        <form><input value={val} 
        onChange={inputValue}
        className='msgSendInput' placeholder="What's on your mind"/>
            <input value={imgUrl} onChange={imgInputVal} placeholder='image URL (Optional)'></input>
            <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>
</div>
    <div className='msgSendBottom'>
    <div className='msgSendOption'>
        <Videocam style={{color:'red'}}/> 
                    <h3>Live Video</h3>
     
    </div>

    <div className='msgSendOption'>
        <PhotoLibrary style={{color:'green'}}/> 
                    <h3>Photo/Video</h3>
     
    </div>

    <div className='msgSendOption'>
        <InsertEmoticon style={{color:'orange'}}/> 
                    <h3>Feeling/Activity</h3>
     
    </div>
        
    </div>

    </div>
  )
}

export default MessageSender