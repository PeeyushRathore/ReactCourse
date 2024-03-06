import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    
        <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
        <h1 className="justify-center h-screen flex items-center text-3xl">Mere room me ek hawasi rhta h</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick={()=> setColor("red")}
            className="outline-none px-4 rounded-full py-1" 
            style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=> setColor("green")}
            className="outline-none px-4 rounded-full py-1" 
            style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=> setColor("blue")}
            className="outline-none px-4 rounded-full py-1" 
            style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=> setColor("black")}
            className="outline-none px-4 rounded-full py-1 text-white" 
            style={{backgroundColor: "black"}}>Black</button>
            <button onClick={()=> setColor("violet")}
            className="outline-none px-4 rounded-full py-1" 
            style={{backgroundColor: "violet"}}>Violet</button>
            <button onClick={()=> setColor("yellow")}
            className="outline-none px-4 rounded-full py-1" 
            style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> setColor("purple")}
            className="outline-none px-4 rounded-full py-1" 
            style={{backgroundColor: "purple"}}>Purple</button>
              
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
