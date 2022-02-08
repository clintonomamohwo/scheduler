import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace) {
   
   
      replace
        ? setHistory(prevhistory=> [...prevhistory.slice(0, -1), mode])
        :  setHistory(prevhistory=>[...prevhistory, mode])
        
     setMode(mode);
      
  }

  function back() {
    if (history.length < 2) return;
    setMode(history[history.length - 2]);
    setHistory(prevhistory=>[...prevhistory.slice(0, -1)]);
  }

  return { mode, transition, back };
}
