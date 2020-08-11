import React, {useEffect, useState} from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase';
import {Message} from './Message';
import { ChatInput } from './ChatInput';

export const Chat = () => {
  let {roomId} = useParams();
  roomId = roomId.substring(1);
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  console.log(roomDetails)
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          console.log(snapshot.data());
          setRoomDetails(snapshot.data());
        });
      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon />
            details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({user,message,timestamp, userImage}) => (
          <Message user={user} message={message} userImage={userImage} timestamp={timestamp} />
        ))}
      </div>
          <ChatInput clannelName={roomDetails?.name} channelId={roomId}/>

    </div>
  );
};
