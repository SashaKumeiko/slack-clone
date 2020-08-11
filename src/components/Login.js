import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from '../firebase';
import {useStateValue} from '../StateProvider';
import {SET_USER} from '../reducer';

export const Login = () => {
  const [dispatch] = useStateValue();
console.log(SET_USER)
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch({
          type: SET_USER,
          user: res.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Logo.wine.svg"
          alt=""
        />
        <h1>Sign in to Slack-clone</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};
