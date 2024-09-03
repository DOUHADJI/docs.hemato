import { Link } from '@nextui-org/react'
import App from 'next/app'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { appTitle, AppTitleCpn, myLinkedinProfilLink } from '../const'

const Problematique: FunctionComponent = () => {
  return (
    <section className="relative pt-12">
      <div>
        <div className="text-lg uppercase font-black text-danger sm:text-2xl md:text-[2rem]">
          <span className="text-blue-700 mr-2 text-[2rem] md:text-[2.5rem]">
            #
          </span>
          {appTitle} : qu&apos;est ce que s&apos;est  et pourquoi ?
        </div>
      </div>

      <div className=" grid md:grid-cols-2 gap-8 pl-12 mt-12">
        <div className='text-gray-700 text-justify'>
          <div className="text-lg md:text-[1.4rem] font-bold text-black my-4">
            <span className="text-blue-700 mr-2 text-sm md:text-[1.3rem]">
              #
            </span>
            D&apos;abord la problématique
          </div>
          <span>Partant du constat que le</span>
            <span>
              <a className=" font-bold"> Togo </a>
            </span>
            n&apos;a pas un site officiel de documentation sur les processus au
            sein des sutructures de santé, et plus précisément dans les
            laboratoires d&apos;analyses, pour servir de référence au personnel
            médical, mais également aux étudiants en formation, en apportant des
            informations claires, précises et fiables pour quiconque serait en
            doute dans la réalisation d&apos;un processus, en même qu&apos;en
            étant une référence pour les structures de santé dans la mise en
            place de leur manuel qualité conformément aux recommandations de la
            norme{' '}
            <a
              className="underline text-bold text-blue-700 z-20"
              target={'_blank'}
              rel="noreferrer"
              href="https://www.iso.org/fr/standard/56115.html#:~:text=L%27ISO%2015189%3A2012%20sp%C3%A9cifie,et%20%C3%A9valuent%20leur%20propre%20comp%C3%A9tence."
            >
              ISO 15189 : 2012
            </a>{' '}
            , quelque chose devait être fait pour y remédier !
        </div>

        <div className='text-gray-700 text-justify'>
          <div className="text-lg md:text-[1.4rem] font-bold text-black my-4">
            <span className="text-blue-700 mr-2 text-sm md:text-[1.3rem]">
              #
            </span>
            Approche de solution
          </div>
          <AppTitleCpn /> est une solution pensée visant à fournir un répertoire
          de méthodologies sur les différents processus, effectués au sein des
          laboratoires d&apos;analyses en hématologie, tout en tenant compte des
          paramêtres de restrictions liés aux conditions réelles au sein des
          structures de santé, des laboratoires d&apos;analyses.
        </div>

        <div className='text-gray-700 text-justify'>
          <div className="text-lg md:text-[1.4rem] font-bold text-black my-4">
            <span className="text-blue-700 mr-2 text-sm md:text-[1.3rem]">
              #
            </span>
            {appTitle}, peut-on s&apos;y fier ?
          </div>
          <AppTitleCpn /> est une ressource fiable, conçue pour offrir des
          informations claires et validées sur les processus en hématologie.
          Chaque méthodologie est basée sur des normes reconnues, régulièrement
          mise à jour, et adaptée aux réalités des laboratoires. Vous pouvez
          compter sur {appTitle} pour être une référence pratique et
          sécurisée pour les professionnels de la santé et les étudiants.
        </div>
      </div>
    </section>
  )
}

export default Problematique
