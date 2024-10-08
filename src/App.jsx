import { useEffect, useState } from 'react'
import ParticlesBackground from './components/ParticlesBackground';
import './App.css'
// background animation

 function App() {
 const [advice,setAdvice] = useState("");
 const [count,setCount]= useState(0);
 async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c)=> c + 1);  
 }
  useEffect(()=>{
    getAdvice();
  },[]);

 return(
  <>
  <div id='particles'>
  <ParticlesBackground/>  
  </div>
 <div className="App">
  <h1>{advice}</h1>
  <button onClick={getAdvice}>Get advice</button>   

 </div>
  </>

  
 )
}
 function Message(props){
  return(
    <>
    <p>
      You have read <strong>{props.count}</strong> advice today.
    </p>
    </>

  )
 }


 export default App