import {
  Avatar,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from '@nextui-org/react'
import { FC, useState, useEffect } from 'react'
import { axiosInstance } from '../api'
import SearchSingleResult from './searchSingleResult'

const SearchModal: FC<{ open: boolean; setOpen }> = ({ open, setOpen }) => {
  const [results, setResults] = useState([])
  const [noResultText, setNOResultText] = useState(
    'Veuillez saisir quoi rechercher...',
  )

  useEffect(() => {}, [results])

  const searchStories = async (e) => {
    setResults([])
    const value = e.target.value

    if (value == ' ') {
      setResults([])
    }
    const { data } = await retrieveStories()

    const { stories } = data
    let result

    if (value != ' ') {
      result = stories?.filter((story) => {
        const title = story.content.title.toUpperCase()
        return title.includes(value.toUpperCase())
      })
    }

    setResults(result.slice(0, 3))

    if (value != ' ' && result.length == 0) {
      setNOResultText("Oups ! Nous n'avons rien trouvé...")
    }
  }

  const retrieveStories = async () => {
    return await axiosInstance().get('/')
  }

  return (
    <Modal
      className="bg-white rounded-none"
      isOpen={open}
      closeButton
      onClose={() => setOpen(false)}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className="h-8"> </div>
              <div className="bg-gray-100 pt-2  w-full"></div>
              <div className="h-4"> </div>

              <div className="w-full border-t-2">
                {/*  <p className="text-gray-500 text-sm font-bold pl-8 pt-12">
            {' '}
            Recherches récentes
          </p> */}

                <p className="text-gray-500 text-sm font-bold pl-8 pt-12">
                  {' '}
                  Résultats
                </p>

                <div className="">
                  {/* <p className="text-gray-500 text-sm  pl-8 pt-4"> Procédures</p> */}
                  <div className="grid gap-6 pl-6 py-4">
                    {results.length > 0 ? (
                      results.map((story, index) => (
                        <SearchSingleResult
                          key={index}
                          title={story?.content.title}
                          description={story?.content.description}
                          image={story?.content.image}
                          story_link={story?.full_slug}
                        />
                      ))
                    ) : (
                      <p className="text-red-300 font-ligth">{noResultText}</p>
                    )}
                  </div>
                </div>
              </div>

              {/*  <div className="w-full border-t-2">
          <p className="text-gray-500 text-sm  pl-8 pt-4"> Cours</p>
        </div> */}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default SearchModal
