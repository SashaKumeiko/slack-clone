import React, {useState} from 'react';
import './ChatInput.css'
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase'

export const ChatInput = ({channelName, channelId}) => {
    const [input, setInput] = useState('');
    const [{user}] = useStateValue()


    const sendMessage=(e)=>{
        e.preventDefault();
        if(channelId){

            db.collection("rooms").doc(channelId).collection("messages").add(
                {
                   message: input,
                   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                   user: user.displayName,
                   userImage: user.photoURL 
                }
            ) 
        }
        setInput("")
    }
    console.log(channelName)
  return (
    <div className="chatInput">
      <form>
        <input placeholder='input message'
        value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={sendMessage}>SEND</button>
      </form>
    </div>
  );
};
