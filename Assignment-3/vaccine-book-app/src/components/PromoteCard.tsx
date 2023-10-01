"use client";
import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";
export function PromoteCard() {

  const [playing, setPlaying] = useState(true);
  useWindowListener('contextmenu', (e) => {
    e.preventDefault()
})


  return (
    <div
      className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row"
    >
      <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing} />
      <div className="m-5">
        <p className="text-4xl font-semibold">Get your vaccine today.</p>
        <button
          className="my-5 block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={() => { setPlaying(!playing)}}>
          { playing? 'Pause':'Play' }
        </button>
      </div>
    </div>
  );
}
