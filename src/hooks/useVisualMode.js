import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    setHistory(
      replace
        ? (prev) => [...[...prev].slice(0, -1), newMode]
        : (prev) => [...prev, newMode]
    );
  }

  function back() {
    if (history.length > 1) {
      setHistory((prev) => [...[...prev].slice(0, -1)]);
      setMode(history[history.length - 2]);
    } else {
      setMode(history[0]);
    }
  }

  return { mode, transition, back };
}
