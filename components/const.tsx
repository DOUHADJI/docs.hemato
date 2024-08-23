export const appTitle = 'Docs.Hemato'

export const myLinkedinProfilLink =
  'https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/'
export const myGithubProfilLink = 'https://github.com/DOUHADJI'

export const NavLinks = [
  {
    title: 'Procédures',
    href: '/procedures/prologue',
    isBlank : true
  },

  {
    title: 'Cours',
    href: '/cours/prologue',
    isBlank : true
  },

  {
    title: 'Atlas cytologique',
    href: '/atlas',
    isBlank : true
  },

  {
    title: 'Cas de la semaine',
    href: '/cas-de-la-semaine',
    isBlank : false
  },

  {
    title: 'Articles',
    href: '/articles',
    isBlank : false
  },
]

export function openSidebar() {
  document.querySelector('.sidebar').classList.toggle('hidden')
  document.querySelector('.hiddeButton').classList.toggle('hidden')
}

export function AppTitleCpn() {
  return (
    <span>
      <span>
        <a className="font-bold text-danger">{appTitle}</a>
      </span>{' '}
    </span>
  )
}

export class contributor {
  name: string
  grade: string
  profil: string
  assertion: string
}

export let amevi = new contributor()
amevi = {
  name: 'Amevi Gregoire DOUHADJI',
  grade: 'Développeur web',
  profil: '/images/contributors/Amevi.png',
  assertion:
    "Il m'est paru logique à travers Docs.Hemato une occasion pour moi d'apporter ma part de contribution à la lourde tâche qui nous incombe au sein du corps médical, puisque que moi-même je suis issu d'une formation médicale... ",
}

export let michel = new contributor()
michel = {
  name: 'Michel Kossi AKPABLA',
  grade: 'Développeur web',
  profil: '/images/contributors/Michel.jpg',
  assertion:
    "Nous nous sommes engagés à apporter des solutions concrètes aux défis du secteur médical. Nous avons  compris l'importance d'une documentation claire et accessible pour les professionnels de santé, un répertoire de méthodologies précises et fiables.",
}

export const contributors: contributor[] = [amevi]
