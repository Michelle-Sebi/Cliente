import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { peticionServidorChats, selectChats  } from '../redux/chatSlice';


export default function Conversaciones() {
  
  const chats = useSelector(selectChats)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(peticionServidorChats())
  },[])

  return (
    <>
      <ul>
        {/* {console.log("recogiendo chats :", chats)} */}
        {chats.map((chat,index)=>
          <li key={index}>{chat.title}</li>
        )}
      </ul>
    </>
  )
}
        
      
