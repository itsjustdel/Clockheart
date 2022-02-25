import React, { useState, useEffect, useRef } from "react";
import useSound from 'use-sound';

const Music = ({url, soundLevel}) => {

const [play] = useSound(
  url,
  { volume: soundLevel,
  loop: true }
);

  return (
    <>
       {/* {play()} */}
    </>
  )
}
export default Music;