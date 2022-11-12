import { FC } from 'react'
import RichtextRenderer from '../richTextRenderer'
import VideoPlayer from '../videoPlayer'

const ProcessCpn: FC<{ story }> = ({ story }) => {
  const {
    content: { title, description, content, video },
  } = story
  return (
    <div className="pt-6">
      <div>
        <p className="text-[2rem] uppercase font-bold">
          <span className="text-blue-400 mr-2 text-[2.5rem]">#</span>
          {title}
        </p>
      </div>
      <div>
        <section>
          <p className="text-[1rem] uppercase font-bold">
            <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
            description
          </p>
          <p className="text-justify  text-white/75 text-lg font-light ">
            {description}
          </p>
        </section>
      </div>
      <div>
        <section>
          <p className="text-[1rem] uppercase font-bold">
            <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
            content
          </p>
          <p className="text-justify  text-white/75 text-lg font-light ">
            <RichtextRenderer document={content} />
          </p>
        </section>
      </div>

      <VideoPlayer link={video} />
    </div>
  )
}

export default ProcessCpn
