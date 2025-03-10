import {selectConversacion} from '../redux/chatSlice'
import { useSelector } from 'react-redux';
  

export default function VentanaPpal() {
  
  const conversacion = useSelector(selectConversacion)

  if (conversacion.length > 0){
    
    return <>
      <div className="messages">
        {conversacion.map((frase,index)=>(
          <ul key={index}>
            <li>
              <div className="message-container">
                <div className={"avatar" + frase.role}>
                  {conversacion.role === "user"
                  ?<img src="./public/banana-32x32.png" alt="avatar"/>
                  :<img src="./public/favicon-32x32.png" alt="avatar"/>
                  }
                </div>
                <div className="">
                  <div className="role">{frase.role}</div>
                  <div className="content">{frase.content}</div>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
    
  }else{
    return null;
  }
}
