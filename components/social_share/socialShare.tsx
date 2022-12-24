import { Button } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { BsLink, BsShare } from 'react-icons/bs'
import SocialShareModalCpn from './socialShareModal'


const SocialShareCpn: FunctionComponent<{ link: string }> = ({ link }) => {



  const [open, setOpen] = useState(false)
  const [copy, setCopy] = useState(false)
  

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleClipboardCopy = () => {
    () => navigator.clipboard.writeText(link);
     setCopy(true)
  }

  return (
    <div className='flex flex-wrap gap-4'>
        <Button
        bordered
        auto
        className="border-white rounded-full"
        data-clipboard-text = {link}
        onPress={handleClipboardCopy}
      >
        <BsLink className="text-2xl text-white mr-2" />
        <p className="font-bold text-white/75">
    
            { copy == true ? 'Lien copié' : 'Copier le lien' }
            
        </p>
      </Button>

      <Button
        bordered
        auto
        className="border-white rounded-full"
        onPress={handleOpenModal}
      >
        <BsShare className="text-xl text-white mr-2" />
        <p className="font-bold text-white/75">Partager</p>
      </Button>
      <SocialShareModalCpn link={link} open={open} setOpen={setOpen} />
    </div>
  )
}

export default SocialShareCpn
