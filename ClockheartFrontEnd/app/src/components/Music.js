import React, { useState, useEffect, useRef } from "react";

const useAudio = url => {
  const inputRef = useRef(null)
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(true)

  const toggle = () => setPlaying(!playing)

  audio.volume = 0.1;
  audio.loop = true


  useEffect(() => {
    console.log("music test uref");
    inputRef.current.handleClick()
  },[])

  useEffect(() => {
      playing ? audio.play() : audio.pause()
    },
    [audio, playing]
  );

  useEffect(() => {
// newly added
    // audio.addEventListener('canplay', () => setPlaying(true))  

    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    };
  }, []);

  return [playing, toggle]
};

const Music = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return (
    <div>
      <button id="play-button" ref={inputRef} onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Music;