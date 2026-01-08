import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const socket = useRef<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement |null>(null);

  useEffect(()=>{
      socket.current = new WebSocket("ws://localhost:8000/");
      console.log("control reached here")
      socket.current.onopen = ()=> console.log("connected");

      socket.current.onmessage = (e)=>{
        //console.log(e);
        alert (e.data);
      }

      return()=>{
        socket.current?.close()
      }
  },[])

  function sendMessage(){
    if(!socket.current) return;
    if (socket.current.readyState !== WebSocket.OPEN) return;
    if(!inputRef.current) return;
    socket.current.send(inputRef.current.value)
    inputRef.current.value ="";
  }

  return (
    <div>
      <input ref = {inputRef} type="text" placeholder='Enter text'></input>
      <button onClick={sendMessage}>Send </button>
    
    </div>
  )
}

export default App
