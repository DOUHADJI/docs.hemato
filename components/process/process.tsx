import { Image, Modal } from '@nextui-org/react'
import { useRouter } from 'next/router'

import { FC, useState } from 'react'
import { BsShare } from 'react-icons/bs'
import RichtextRenderer from '../richTextRenderer'
import SocialShareCpn from '../social_share/socialShare'
import VideoPlayer from '../videoPlayer'

const ProcessCpn: FC<{ story }> = ({ story }) => {
  const router = useRouter()
  const link = process.env.NEXT_PUBLIC_APP_BASE_PATH + router.asPath

  const {
    content: { title, description, content, image, video },
  } = story

  const [open, setOpen] = useState(false)

  const handleImage = () => {
    setOpen(true)
  }
  return (
    <div className="pt-6">
      <SocialShareCpn link={link} />
      <div>
        <p className="text-[2rem] uppercase font-bold">
          <span className="text-blue-400 mr-2 text-[2.5rem]">#</span>
          {title}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="col-span-2">
            <p className="text-[1rem] uppercase font-bold">
              <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
              description
            </p>
            <p className="text-justify  text-white/75 text-lg font-light ">
              {description}
            </p>
          </section>
          <section className="flex items-center">
            <Image
              alt="process image"
              src={image}
              width={220}
              onClick={handleImage}
              className=""
            />
            <Modal
              noPadding
              open={open}
              onClose={() => setOpen(false)}
              className="bg-transparent rounded-[0px] "
            >
              <Modal.Body>
                <Image alt="process image" src={image} width={720} />
              </Modal.Body>
            </Modal>
          </section>
        </div>
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
