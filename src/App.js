import { useRef, useState } from "react"

const App = () => { 

  const [timer,setTimer] = useState(0);
  const [start,setStart] = useState(true);
  let currentTimer=useRef();

const handleStart = () => {
  if(start){
    currentTimer.current = setInterval(()=>{
      setTimer(timer=>timer+1);
    },1000)
}
}

const handleStop = () => {
  clearInterval(currentTimer.current);
  setStart(false);
}

const handleReset= () => {
  setTimer(0);
  setStart(true);
}


  const formateTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return(
    <div className="align-middle bg-body">
        <h1 className="text-center font-bold text-xl ">Stop Watch</h1>
        <h2 className="text-center text-l font-bold">{formateTime()}</h2>
        <div className="flex justify-center text-white font-bold space-x-3 my-4 items-center">
        <button className="bg-green-700 p-2 rounded-md" onClick={handleStart}>Start</button>
        <button className="bg-red-700 p-2 rounded-md" onClick={handleStop}>Stop</button>
        <button className="bg-black p-2 rounded-md" onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default App;