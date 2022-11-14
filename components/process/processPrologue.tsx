import { FunctionComponent } from 'react'

const ProcessPrologue: FunctionComponent = () => {
  return (
    <div className="pt-6">
      <div>
        <p className="text-[2rem] uppercase font-bold ">
          <span className="text-blue-400 mr-2 text-[2.5rem] ">#</span>
          Les procédures dans les laboratoires d&apos;analyses
        </p>
      </div>
      <div>
        <section>
          <p className="text-[1rem] uppercase font-bold tracking-wide mt-12">
            <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
            Introduction
          </p>
          <p className="text-justify  text-white/75 text-lg font-light ">
            Dans ce volet du site, nous vous proposons les méthodes
            standardisées pour la réalisatoin d&apos;analyses au seins des
            laboratoires. Ces méthodes sont scindées en trois grands sous-volet
            ou phases :
            <br />
            <span className="font-medium text-blue-300 pl-6">
              {' '}
              # La phases pré-analytiques et ses méthodes{' '}
            </span>
            <br />
            <span className="font-medium text-blue-300 pl-6">
              # La phases analytiques et ses méthodes{' '}
            </span>
            <br />
            <span className="font-medium text-blue-300 pl-6">
              # La phases postanalytiques et ses méthodes{' '}
            </span>
            <br />
          </p>
        </section>
      </div>

      <div className="mt-8">
        <section>
          <p className="text-[1rem] uppercase font-bold tracking-wide">
            <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
            Qu&apos;est ce qu&apos;une procédure en laboratoire d&apos;analyses ?
          </p>
          <p className="text-justify  text-white/75 text-lg font-light ">
            D&apos;appelation technique
            <span className="font-medium text-blue-300">
              {' '}
              "Procédures Opératoires Standardisées (POS)"{' '}
            </span>
            , les POS (procédures) sont des documents qui contiennent des
            instructions écrites, étape par étape, que le personnel du
            laboratoire devrait suivre méticuleusement lorsqu&apos;il réalise une
            analyse, dont l&apos;ensemble constitue le "manuel qualité" du
            Laboratoire. Ce manuel contient donc une POS pour chaque analyses ou
            processus réalisés au sein du laboratoire.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <section>
          <p className="text-[1rem] uppercase font-bold tracking-wide">
            <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
            Intérêt des POS au sein des laboratoires d'analyses ?
          </p>
          <p className="text-justify  text-white/75 text-lg font-light ">
            Les POS au sein des laboratoires assurent : <br /> <br />
            <span className="font-medium pl-6">
              <span># La cohérence {':'} </span> Chaque membre du personnel
              devra suivre exactement les étapes décritent dans les POS afin
              d&apos;assurer une uniformité des résultats obtenus par le reste du
              personnel pour la même analyse.
            </span>
            <br /> <br />
            <span className="font-medium pl-6">
              <span># L&apos;exactitude {':'} </span> Le suivi de procédures
              écrites aide le personnel du laboratoire à produire des résultats
              plus exacts car aucune étape ne sera oubliée
            </span>
            <br /> <br />
            <span className="font-medium pl-6">
              <span># La qualité {':'} </span> Des résultats de qualité et
              fiables sont les premiers objectifs du laboratoire et pourraient
              être considérés comme une définition de la qualité au laboratoire
            </span>
          </p>
        </section>
      </div>

      <div className="mt-8">
        <section>
          <p className="text-[1rem] uppercase font-bold tracking-wide">
            <span className="text-blue-300  mr-2 text-[1.5rem]">#</span>
            Caractérisques des POS en laboratoire d&apos;analyses
          </p>
          <p className="text-justify  text-white/75 text-lg font-light ">
            Les POS doivent avoir impérativement les caractéristiques suivantes
            :
            <br /> <br />
            <span className="font-medium pl-6">
              # Etre bien détaillées et bien claires et consises afin que le
              qu'une personne normalement non habilitée à réaliser la procédure
              puisse y parvenir en suivant les instructions de la POS.
            </span>
            <br /> <br />
            <span className="font-medium pl-6">
              # Etre facilement compréhensible pour des éventuels nouveaux
              personnels ou des stagiaires
            </span>
            <br /> <br />
            <span className="font-medium pl-6">
              # Etre revue et approuvée par la direction du laboratoire.
              L'approbation est indiquée par une signature et une date ; il est
              important de s’assurer que les procédures utilisées pour les
              analyses au laboratoire soient celles qui sont à jour et
              appropriées
            </span>
            <br /> <br />
            <span className="font-medium pl-6">
              # Etre régulièrement mise à jour
            </span>
          </p>
        </section>
      </div>
    </div>
  )
}
export default ProcessPrologue
