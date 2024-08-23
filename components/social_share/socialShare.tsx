import { Button, Link } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { BsLink, BsShare } from 'react-icons/bs'
import SocialShareModalCpn from './socialShareModal'
import { toast } from "react-toastify"

const SocialShareCpn: FunctionComponent<{ link: string; title: string }> = ({
  link,
  title,
}) => {
  const [open, setOpen] = useState(false)
  const [copy, setCopy] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleClipboardCopy = async () => {
    navigator.clipboard.writeText(link)
    setCopy(true)
    resetCopy()
    toast.info("Lien copié");
  }

  const resetCopy = () =>
    setTimeout(() => {
      setCopy(false)
    }, 2000)

  return (
    <div className="flex flex-col fixed -right-6 justify-start items-center gap-4">
      <Button className="" onPress={handleClipboardCopy} color="primary">
        <div className="flex items-center gap-1 w-full py-1">
          <BsLink className="text-white" size={20} />
        </div>
      </Button>

      <Button className="z-20" onPress={handleOpenModal} color="success">
        <div className="flex items-center gap-1 w-full py-1">
          <BsShare className="text-white" size={18} />
        </div>
      </Button>

      <SocialShareModalCpn
        link={link}
        title={title}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default SocialShareCpn
