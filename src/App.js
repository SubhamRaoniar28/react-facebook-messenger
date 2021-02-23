import { FormControl, IconButton, Input } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });  
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  console.log('messages: ' , messages);

  const sendMessage = (event) => {
    event.preventDefault(); //prevent refreshing

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

//The diff. between map and foreach is that the map() returns something
//in above it's returning a <p><p/> tag
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>       
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} message={message} username={username} />
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
