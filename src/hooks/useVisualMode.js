import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial])

  function transition(newMode, replace = false) {
    // the replace if-condition is same as the commented if-condition below. We spread prev in an array. [...prev] becomes a copy of history. We then pop of the last element but using slice to avoid mutation. the second argument of slice is basically the ...prev array's length - 1. After that, we spread the latest array and add newMode to complete a new history.
      setMode(newMode);
      setHistory(replace ? (prev) => [...[...prev].slice(0, [...prev].length - 1), newMode] : (prev) => [...prev, newMode]) //history stacking without using .push()
    }
  

  function back() {
    if(history.length > 1) {
      setHistory((prev) => [...[...prev].slice(0, -1)]); //history removing without using .pop()
      setMode(history[history.length - 2]);
    } else {
      setMode(history[0])
    }
  }

  return { mode, transition, back };
}


// if(replace) {
//   setMode(newMode);
//   setHistory(() => {
//     const newHistory = history.slice(0, history.length - 1);
//     return [...newHistory, newMode]
//   } )
// } else {
//   setMode(newMode);
//   setHistory((prev) => [...prev, newMode]); //history stacking without using .push()
// }
// }
