import { Avatar, Link } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const SearchSingleResult: FunctionComponent<{
  title: string
  description: string
  image: string
  story_link: string
}> = ({ title, description, image, story_link }) => {
  return (
    <Link href={'/' + story_link}>
      <div className="flex gap-4">
        <Avatar squared size={'xl'} src={image} />
        <div className="grid gap- justify-center pr-4">
          <p className="font-bold text-gray-700">{title}</p>
          <p className="font-bold text-blue-900/75 text-xs">{story_link}</p>
          <p className="font-light text-gray-700/75 truncate ">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchSingleResult
