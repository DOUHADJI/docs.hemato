import { Button, Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { API_URL } from '../shared/apiEndpoints'
import { BsEye } from 'react-icons/bs'

const WeekCase: FunctionComponent<{ cas: any }> = ({ cas }) => {
  return (
    <>
      <div className="shadow rounded w-full">
        <Image src={API_URL + cas?.image} className="rounded-none"  height={280} width={500}/>
        <div className="font-bold px-6 pt-8">{cas?.title} </div>
        <div className="py-4 px-6 text-justify">{cas?.resume}</div>
        <div className="flex p-8">
            <Button color="danger" className='rounded-none w-full'>
                Consulter <BsEye />
            </Button>
          </div>
      </div>
    </>
  )
}

export default WeekCase
