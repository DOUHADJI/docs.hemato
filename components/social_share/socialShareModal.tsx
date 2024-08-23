import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react'
import { FunctionComponent } from 'react'
import {
  BsFacebook,
  BsLinkedin,
  BsShare,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

const SocialShareModalCpn: FunctionComponent<{
  link: string
  title: string
  open: boolean
  setOpen
}> = ({ link, title, open, setOpen }) => {
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      className="bg-white pb-2"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <p className="text-danger font-black text-2xl">
                Partager le lien de <span className='text-gray-600 text-xl font-bold'>{title} </span>{' '}
              </p>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-wrap justify-center gap-6">
                <WhatsappShareButton url={link}>
                  <Avatar
                    size={'lg'}
                    className="bg-white"
                    icon={<BsWhatsapp className="text-3xl text-green-700" />}
                  />
                </WhatsappShareButton>

                <FacebookShareButton url={link}>
                  <Avatar
                    size={'lg'}
                    className="bg-white"
                    icon={<BsFacebook className="text-3xl text-blue-700" />}
                  />
                </FacebookShareButton>

                <TwitterShareButton url={link}>
                  <Avatar
                    size={'lg'}
                    className="bg-white"
                    icon={<BsTwitter className="text-3xl text-blue-700" />}
                  />
                </TwitterShareButton>

                <LinkedinShareButton url={link}>
                  <Avatar
                    size={'lg'}
                    className="bg-white"
                    icon={<BsLinkedin className="text-3xl text-blue-700" />}
                  />
                </LinkedinShareButton>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default SocialShareModalCpn
