import { Image, Modal, ModalBody } from '@nextui-org/react'
import { useRouter } from 'next/router'

import { FC, useState } from 'react'
import { BsShare } from 'react-icons/bs'
import RichtextRenderer from '../richTextRenderer'
import SocialShareCpn from '../social_share/socialShare'
import VideoPlayer from '../videoPlayer'

const ProcessCpn: FC<{ record }> = ({ record }) => {
  const router = useRouter()
  const link = process.env.NEXT_PUBLIC_APP_BASE_PATH + router.asPath

  const [open, setOpen] = useState(false)

  const handleImage = () => {
    setOpen(true)
  }
  return (
    <div className="pt-6 text-black relative">
      
      <div className='flex flex-wrap items-center gap-6'>
        <p className="text-[2rem] uppercase font-bold">
          <span className="text-danger mr-2 text-[2.5rem]">#</span>
          {record?.title}
        </p>
        <SocialShareCpn link={link} title={record?.title} />
      </div>
      <div className="flex">
        <VideoPlayer link={record?.video_path} />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="flex items-center">
            <Image
              alt="process image"
              src={record?.image_path}
              width={220}
              onClick={handleImage}
              className=""
            />
            <Modal
              isOpen={open}
              onClose={() => setOpen(false)}
              className="bg-transparent rounded-[0px] "
            >
              <ModalBody>
                <Image alt="process image" src={record?.image_path} width={720} />
              </ModalBody>
            </Modal>
          </section>
        </div>
      </div>
      <div>
        <section>
          <p className="text-[1rem] uppercase font-bold mb-6">
            <span className="text-danger  mr-2 text-[1.5rem]">#</span>
            Procédure de la : {record?.title}
          </p>
          <div className="text-justify  text-black text-lg font-light">
            <RichtextRenderer document={record?.content} />
          </div>
        </section>
      </div>

    </div>
  )
}

export default ProcessCpn
