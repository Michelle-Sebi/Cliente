

import { useDispatch, useSelector } from "react-redux";
import { decrementar, selectContador } from "./cronoSlice";

function formatDate(date){
    let mm = String(date.getMinutes()).padStart(2,'0');
    let ss = String(date.getSeconds()).padStart(2,'0');
    let dd = String(Math.floor(date.getMilliseconds()/100)).padStart(1,'0');

    return `${mm}:${ss}:${dd}`;
}



function createTime(hh, mm, ss, ms){
    let date = new Date();
    date.setHours(hh,mm,ss,ms);
    return date;
}     

let finalDate = createTime(0,0,0,0);

function Display(){
//  const [contador, setContador]= useState(createTime(0,0,10,0))
    const contador = useSelector(selectContador);
    const dispatch = useDispatch();

 if(contador > finalDate){
    setTimeout(()=>{
        //setContador(substractMs(contador, 10));
        dispatch(decrementar())

 })
    
}



 
//  useEffect(()=>{
//     setInterval(()=>{
//         setContador(substractMs(contador, 10))
//     }, 10)
//  }, [])

 return(
    <>
        <h1>Contador</h1>
        {formatDate(contador)}
    </>
 )

}



export default Display;