import { Link } from '@nextui-org/react'
import App from 'next/app'
import { FunctionComponent } from 'react'
import { appTitle, AppTitleCpn } from '../const'

const Problematique: FunctionComponent = () => {
  return (
    <div>
      <section>
        <div>
          <p className="text-[2rem] uppercase font-bold">
            <span className="text-blue-400 mr-2 text-[2.5rem]">#</span>
            {appTitle} : qu&apos;est ce que s&apos;est ?
          </p>
        </div>
        <div className="pl-12">
          <p className="text-[1.2rem] text-justify">
            <p className="text-[1.4rem]  font-bold">
              <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
              D&apos;abord la problématique
            </p>
            Partant du constat que le
            <span>
              <a className=" font-bold"> Togo </a>
            </span>
            n&apos;a pas un site officiel de documentation sur les processus au
            sein des sutructures de santé, <AppTitleCpn />
            est dédié à fournir un répertoire de méthodologies des différents
            processus, effectués au sein des laboratoires d&apos;analyses en
            hématologie, selon les exigences de la norme{' '}
            <a
              className="underline text-bold text-blue-300"
              target={'_blank'}
              rel="noreferrer"
              href="https://www.iso.org/fr/standard/56115.html#:~:text=L%27ISO%2015189%3A2012%20sp%C3%A9cifie,et%20%C3%A9valuent%20leur%20propre%20comp%C3%A9tence."
            >
              ISO 15189:2012
            </a>
            <br />
            <br />
            <p className="text-[1.4rem]  font-bold">
              <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
              Approche
            </p>
            <AppTitleCpn />
            est animé par les médecins et biologistes du laboratoire
            d&apos;hématologie du{' '}
            <a
              className="underline text-bold text-blue-300"
              target={'_blank'}
              href="https://telemedchucampus.tg/"
              rel="noreferrer"
            >
              CHU Campus/Lomé-Togo
            </a>
            . Il est destiné à toute personne intéressée et en particulier aux
            étudiants en médecine, pharmacie ou biologie, aux internes en
            hématologie biologique et clinique, aux techniciens de laboratoire,
            aux biologistes et hématologistes...
          </p>
        </div>
      </section>
    </div>
  )
}

export default Problematique