import { Link } from '@nextui-org/react'
import App from 'next/app'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import { appTitle, AppTitleCpn, myLinkedinProfilLink } from '../const'

const Problematique: FunctionComponent = () => {
  return (
    <div className="relative">
      <div className=" grid gap-12 absolute right-0 z-10 opacity-25 border-transparent  ">
        <Image
          height={320}
          width={450}
          src="/images/technicien.jpg"
          alt="White blood cell img"
          className="rounded-tl-[20px] myWbcImg"
        />
      </div>
      <section className="relative">
        <div>
          <p className="text-xl uppercase font-bold text-xl sm:text-2xl md:text-[2rem]">
            <span className="text-blue-400 mr-2 text-[2rem] md:text-[2.5rem]">
              #
            </span>
            {appTitle} : qu&apos;est ce que s&apos;est ?
          </p>
        </div>

        <div className="pl-12 mt-6">
          <p className=" font-bold text-xl md:text-[1.4rem] ">
            <span className="text-blue-300 mr-2 text-sm md:text-[1.3rem]">
              #
            </span>
            D&apos;abord la problématique
          </p>

          <p className="text- text-lg text-justify mt-2  md:text-[1.2rem] ">
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
              className="underline text-bold text-blue-300 z-20"
              target={'_blank'}
              rel="noreferrer"
              href="https://www.iso.org/fr/standard/56115.html#:~:text=L%27ISO%2015189%3A2012%20sp%C3%A9cifie,et%20%C3%A9valuent%20leur%20propre%20comp%C3%A9tence."
            >
              ISO 15189 : 2012
            </a>{' '}
            , quelque chose devait être fait pour y remédier !
            <br />
            <br />
            <p className="text-[1.4rem]  font-bold">
              <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
              Approche de solution
            </p>
            <AppTitleCpn /> est une solution pensée afin d&apos;apporter
            solution à la problématique posée précedemment.
            <br />
            Ce site est dédié à fournir un répertoire de méthodologies sur les
            différents processus, effectués au sein des laboratoires
            d&apos;analyses en hématologie, tout en tenant compte des paramêtres
            de restrictions liés aux conditions réelles au sein des structures
            de santé, des laboratoires d&apos;analyses.
            <br />
            <br />
            <p className="text-[1.4rem]  font-bold">
              <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
              {appTitle}, peut-on s&apos;y fier ?
            </p>
            Ce site est animé par des médecins et biologistes professionnels en
            hématologie du tel que ... (Ceux qui voudront bien soutenir le
            projet){' '}
            <a
              className="line-through decoration-2  text-bold text-blue-300 z-20"
              target={'_blank'}
              href="#"
              /* https://telemedchucampus.tg/ */
              rel="noreferrer"
            >
              CHU / Univertité
            </a>{' '}
            et destiné au personnel du corps médical et en particulier aux
            professionnels ou aux étudiants en biologie médical, et aux
            laboratoires d&apos;analyses...
          </p>
          <div className="grid justify-end">
            <Link href={myLinkedinProfilLink} target="_blank">
              <p className="-ml-8 font-bold text-blue-300">
                {' '}
                Amevi Gregoire DOUHADJI
              </p>
            </Link>

            <p className=" font-light text-gray-400">- Développeur web</p>
            <p className=" font-light text-gray-400">
              - Licence en analyses médicales et biologiques
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Problematique
