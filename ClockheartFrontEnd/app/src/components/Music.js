import React, { useState, useEffect, useRef } from "react";
import useSound from 'use-sound';

const Music = url => {

const [play] = useSound(
  'steampunkambience.mp3',
  { volume: 0.03,
  loop: true }
);

  return (
    <>
       {/* {play()} */}
    </>
  )
}
export default Music;