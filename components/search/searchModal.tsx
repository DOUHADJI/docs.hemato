import { Modal } from '@nextui-org/react'
import { FC } from 'react'

const SearchModal: FC<{ open: boolean; setOpen }> = ({ open, setOpen }) => {
  return (
    <Modal
      className="bg-black rounded-none"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>
        <p className="text-[1.3rem] text-white font-extralight">Recherche</p>
      </Modal.Header>
    </Modal>
  )
}
export default SearchModal
