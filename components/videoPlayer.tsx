import React, { FC } from 'react'
import ReactPlayer from 'react-player/lazy'

const VideoPlayer: FC<{ link }> = ({ link }) => {
  if (link == null) {
    return null
  }
  const { url } = link
  return (
    <div className="flex justify-center rounded bg-white/25 mt-6 p-6">
      <ReactPlayer url={url} controls={true} />
    </div>
  )
}
export default VideoPlayer
