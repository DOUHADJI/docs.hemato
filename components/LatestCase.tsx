import { Button, Image } from '@nextui-org/react'
import React, { FunctionComponent } from 'react'
import { API_URL } from '../shared/apiEndpoints'
import { BsEye } from 'react-icons/bs'

const LatestCase: FunctionComponent<{ cas: any }> = ({ cas }) => {
  return (
    <>
      <div className=" grid md:grid-cols-2 bg-white rounded shadow-lg shadow-red-300/25 p-8 mb-12 cursor-pointer">
        <div className='py-8'>
          <div className="text-2xl leading-[42px] uppercase font-medium mb-12">
            {cas?.title}
          </div>
          <div>{cas?.resume}</div>
          <div className="flex pt-8">
            <Button color="danger" className='rounded-none w-full'>
                Consulter <BsEye />
            </Button>
          </div>
        </div>

        <div className="text-sm p-8 leading-8 text-justify">
          <Image src={API_URL + cas?.image} className='rounded-none'  height={450} width={500}/>
        </div>
      </div>
    </>
  )
}

export default LatestCase
