import {useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
const Translate = ({text}) => {
  const [textTraduit,setTextTraduit] = useState(text)
  const [loading,setLoading]= useState(false)
  useEffect(async ()=>{
       setLoading(true);
       let response = await fetch('/api/traduire?text='+'"'+text+'"');
        if (response.ok) {
        let json = await response.json();
  console.log(json)
  setLoading(false);
   setTextTraduit(json.traduction)  
    
} else {
  setLoading(false);
  setTextTraduit(text) 
  
}
    },[text])
  return (

    <>
        { loading ? <Skeleton/>  : textTraduit.replace(/"/g,"")}
    </>
  )
}
export default Translate