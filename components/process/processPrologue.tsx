import { FunctionComponent } from 'react'

const ProcessPrologue: FunctionComponent = () => {
  return (
    <div className="pt-6 text-black">
      <div>
        <p className="text-[2rem] uppercase font-bold ">
          <span className="text-danger mr-2 text-[2.5rem] ">#</span>
          Les procédures dans les laboratoires d&apos;analyses
        </p>
      </div>

      <section>
        <p className="text-[1rem] uppercase font-black tracking-wide mt-12">
          <span className="text-danger  mr-2 text-[1.5rem]">#</span>
          Introduction
        </p>
        <p className="text-justify  text-gray-500 text-lg font-light ">
          Dans ce volet du site, nous vous proposons les méthodes standardisées
          pour la réalisatoin d&apos;analyses au seins des laboratoires. Ces
          méthodes sont scindées en trois grands sous-volet ou phases :
        </p>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-bold text-danger pl-6">
            {' '}
            # La phases pré-analytiques et ses méthodes{' '}
          </div>
          <div className="font-bold text-danger pl-6">
            # La phases analytiques et ses méthodes{' '}
          </div>
          <div className="font-bold text-danger pl-6">
            # La phases postanalytiques et ses méthodes{' '}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <p className="text-[1rem] uppercase font-bold tracking-wide">
          <span className="text-danger  mr-2 text-[1.5rem]">#</span>
          Qu&apos;est ce qu&apos;une procédure en laboratoire d&apos;analyses ?
        </p>
        <p className="text-justify  text-gray-500 mt-4 text-lg font-light ">
          D&apos;appelation technique
          <span className="font-medium text-danger">
            {' '}
            "Procédures Opératoires Standardisées (POS)"{' '}
          </span>
          , les POS (procédures) sont des documents qui contiennent des
          instructions écrites, étape par étape, que le personnel du laboratoire
          devrait suivre méticuleusement lorsqu&apos;il réalise une analyse,
          dont l&apos;ensemble constitue le "manuel qualité" du Laboratoire. Ce
          manuel contient donc une POS pour chaque analyses ou processus
          réalisés au sein du laboratoire.
        </p>
      </section>

        <section className="mt-8">
          <p className="text-[1rem] uppercase font-bold tracking-wide">
            <span className="text-danger  mr-2 text-[1.5rem]">#</span>
            Intérêt des POS au sein des laboratoires d'analyses ?
          </p>
          <p className="text-justify  text-gray-500 mt-4 text-lg font-light ">
            Les POS au sein des laboratoires assurent : <br /> <br /> 
            <span className="font-medium pl-6">
              <span className='text-danger'># La cohérence {':'} </span> Chaque membre du personnel
              devra suivre exactement les étapes décritent dans les POS afin
              d&apos;assurer une uniformité des résultats obtenus par le reste
              du personnel pour la même analyse.
            </span>
            <br /> 
            <span className="font-medium pl-6">
              <span className='text-danger'># L&apos;exactitude {':'} </span> Le suivi de procédures
              écrites aide le personnel du laboratoire à produire des résultats
              plus exacts car aucune étape ne sera oubliée
            </span>
            <br /> 
            <span className="font-medium pl-6">
              <span className='text-danger'># La qualité {':'} </span> Des résultats de qualité et
              fiables sont les premiers objectifs du laboratoire et pourraient
              être considérés comme une définition de la qualité au laboratoire
            </span>
          </p>
        </section>

        <section className="mt-8">
          <p className="text-[1rem] uppercase font-bold tracking-wide">
            <span className="text-danger  mr-2 text-[1.5rem]">#</span>
            Caractérisques des POS en laboratoire d&apos;analyses
          </p>
          <p className="text-justify  text-gray-500 mt-4 text-lg font-light ">
            Les POS doivent avoir impérativement les caractéristiques suivantes
            :
            <br /> 
            <br /> 
            <span className="font-medium pl-6">
            <span className="text-danger  mr-2 text-[1.5rem]">#</span> Etre bien détaillées et bien claires et consises afin que le
              qu'une personne normalement non habilitée à réaliser la procédure
              puisse y parvenir en suivant les instructions de la POS.
            </span>
            <br /> 
            <span className="font-medium pl-6">
            <span className="text-danger  mr-2 text-[1.5rem]">#</span> Etre facilement compréhensible pour des éventuels nouveaux
              personnels ou des stagiaires
            </span>
            <br /> 
            <span className="font-medium pl-6">
            <span className="text-danger  mr-2 text-[1.5rem]">#</span> Etre revue et approuvée par la direction du laboratoire.
              L'approbation est indiquée par une signature et une date ; il est
              important de s’assurer que les procédures utilisées pour les
              analyses au laboratoire soient celles qui sont à jour et
              appropriées
            </span>
            <br /> 
            <span className="font-medium pl-6">
              # Etre régulièrement mise à jour
            </span>
          </p>
        </section>
    </div>
  )
}
export default ProcessPrologue
