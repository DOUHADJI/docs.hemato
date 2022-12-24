import { Avatar, Button, Modal, StyledPopoverContent } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFacebook, BsLinkedin, BsShare, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { WhatsappShareButton } from 'react-share'
import FacebookShareButton from 'react-share/lib/FacebookShareButton'
import LinkedinShareButton from 'react-share/lib/LinkedinShareButton'
import TwitterShareButton from 'react-share/lib/TwitterShareButton'

const SocialShareModalCpn: FunctionComponent<{
  link: string
  open: boolean
  setOpen
}> = ({ link, open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className="bg-transparent   p-3"
    >
      <Modal.Header>
        <p className="text-white font-light text-xl">
          Partager via...
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-wrap gap-6">
          <WhatsappShareButton url={link}>
            <Avatar
              squared
              size={'xl'}
              icon={<BsWhatsapp className="text-3xl text-green-700" />}
            />
          </WhatsappShareButton>

          <FacebookShareButton url={link}>
            <Avatar
              squared
              size={'xl'}
              icon={<BsFacebook className="text-3xl text-blue-700" />}
            />
          </FacebookShareButton>

          <TwitterShareButton url={link}>
            <Avatar
              squared
              size={'xl'}
              icon={<BsTwitter className="text-3xl text-blue-700" />}
            />
          </TwitterShareButton>

          <LinkedinShareButton url={link}>
            <Avatar
              squared
              size={'xl'}
              icon={<BsLinkedin className="text-3xl text-blue-700" />}
            />
          </LinkedinShareButton>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SocialShareModalCpn
