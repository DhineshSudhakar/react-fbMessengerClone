import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [msg, SetMsg] = useState("");
  const [messages, setMessages] = useState([])
  const [username, SetUsername] = useState("")

  useEffect( () => {
    db.collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=> ({id: doc.id, message: doc.data()})))
    })
  }, [])


  // when the app load one this code fires

  useEffect( ()=> {
    // Now this code runs once when the app loads
    SetUsername(prompt("Enter you name"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection("messages").add({
      text: msg,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    SetMsg("");
  }
 
  // input

  return (
    <div className="app">
      <img className="logo" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="logo"/>
      <h1>face messenger app</h1>
      <form className="app__form">
        <FormControl className="form-control">
        <Input placeholder="Enter a message" value={msg} onChange={event => SetMsg(event.target.value)}/>
        </FormControl>
        <IconButton className="button" disabled={!msg} variant="outlined" color="primary" 
        type="submit" onClick={sendMessage}>
        <SendIcon />
        </IconButton>
        
      </form>
      
      
      {/* display messages  */}
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

      
    </div>
  );
}

export default App;
