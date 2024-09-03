import React, { FC } from 'react'
import ReactPlayer from 'react-player/lazy'

const VideoPlayer: FC<{ link }> = ({ link }) => {
  console.log(link)
  if (link == null) {
    return null
  }
  return (
    <div className="flex justify-center rounded bg-white/25 mt-6 p-6">
      <ReactPlayer url={link} controls={true} />
    </div>
  )
}
export default VideoPlayer
