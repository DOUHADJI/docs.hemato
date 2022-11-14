import React from 'react'
import { appTitle } from '../../const'
import Contributor from './contributor'

export default function Contributors() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
            Ils contribuent à {appTitle} ...
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 dark:text-gray-300 ">
            Grâce à eux ce projet a pu voir le jour et est un success...
          </p>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <Contributor
            profileImage="/images/contributors/Michel.jpg"
            name="Michel Kossi AKPABLA"
            grade="Développeur web"
            assertion=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus recusandae sapiente error neque laboriosam aliquam enim, soluta praesentium vitae quibusdam reiciendis id ab itaque commodi explicabo nisi. A, sed.
            assertion"
          />
          <Contributor
            profileImage="/images/contributors/Amevi.jpg"
            name="Amevi Gregoire DOUHADJI"
            grade="Développeur web"
            assertion=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus recusandae sapiente error neque laboriosam aliquam enim, soluta praesentium vitae quibusdam reiciendis id ab itaque commodi explicabo nisi. A, sed.
            assertion"
          />
        </div>
      </div>
    </div>
  )
}
