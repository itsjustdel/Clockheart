import React, { useState, useEffect } from "react";

const useAudio = url => {

  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      playing ? audio.play() : audio.pause()
    },
    [playing]
  );

  useEffect(() => {
// newly added
    audio.addEventListener('canplay', () => setPlaying(true))  

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
      <button id="play-button" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Music;