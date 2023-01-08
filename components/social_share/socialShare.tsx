import { Button, Link } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { BsLink, BsShare } from 'react-icons/bs'
import SocialShareModalCpn from './socialShareModal'

const SocialShareCpn: FunctionComponent<{ link: string }> = ({ link }) => {
  const [open, setOpen] = useState(false)
  const [copy, setCopy] = useState(false)

  const handleOpenModal = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClipboardCopy = async (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(link)
    setCopy(true)
    resetCopy()
  }

  const resetCopy = () =>
    setTimeout(() => {
      setCopy(false)
    }, 2000)

  return (
    <div className="flex justify-start gap-4 mt-6">
      <a
        className="border-2 rounded-full"
        onClick={handleClipboardCopy}
        href=""
      >
        <div className="flex justify-center gap-1 w-full px-3 py-1">
          <BsLink className="text-3xl text-white mr-2" />
          <p className="font-bold text-white/75">
            {copy == true ? 'Lien copié' : 'Copier le lien'}
          </p>
        </div>
      </a>

      <a className="border-2 rounded-full" onClick={handleOpenModal} href="">
        <div className="flex justify-center items-center gap-1 w-full px-3 py-1">
          <BsShare className="text-2xl text-white mr-2" />
          <p className="font-bold text-white/75">Partager</p>
        </div>
      </a>

      {/* <Button
        bordered
        auto
        className="border-white rounded-full"
        onPress={handleClipboardCopy}
        type={null}
      >
        <BsLink className="text-2xl text-white mr-2" />
        <p className="font-bold text-white/75">
          {copy == true ? 'Lien copié' : ''}
        </p>
      </Button> */}

      {/* <Button
        bordered
        auto
        className="border-white rounded-full"
        onPress={handleOpenModal}
        type={null} 
      >
        <BsShare className="text-xl text-white mr-2" />
       
      </Button> */}

      <SocialShareModalCpn link={link} open={open} setOpen={setOpen} />
    </div>
  )
}

export default SocialShareCpn
