'use client'

import { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

export default function BackgroundMusicIcon() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <>
      
      <audio ref={audioRef} src="/bgm.m4a" loop />

     
      <button
        onClick={toggleMusic}
        className="flex items-center justify-center w-full h-full text-pink-500 dark:text-pink-900"
      >
        {playing ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </>
  )
}
