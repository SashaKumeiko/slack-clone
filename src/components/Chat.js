import React from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';

export const Chat = () => {
  const roomId = useParams();
  return (
    <div className="chat">
      <h2>You are in the {roomId} room</h2>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
          <strong># general</strong>
          <StarBorderIcon/>
          </h4>
        </div>
        <div className="chat__headerRight">
        <p><InfoIcon/>details</p></div>
  </div>
    </div>
  );
};
