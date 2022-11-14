export const appTitle = 'Docs.Hemato'

export const myLinkedinProfilLink =
  'https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/'
export const myGithubProfilLink = 'https://github.com/DOUHADJI'

export const NavLinks = [
  {
    title: 'Procédures',
    href: '/processes/prologue',
  },

  {
    title: 'Cours',
    href: '/courses/prologue',
  },

  {
    title: 'Atlas cytologique',
    href: '/atlas',
  },

  {
    title: 'Cas de la semaine',
    href: '/#',
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
        <a className="underline font-bold text-blue-300">{appTitle}</a>
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
  profil: '/images/contributors/Amevi.jpg',
  assertion:
    "Il m'est paru logique à travers Docs.Hemato une occasion pour moi d'apporter ma part de contribution à la lourde tâche qui nous incombe au sein du corps médical, puisque que moi-même je suis issu d'une formation médicale... ",
}

export let michel = new contributor()
michel = {
  name: 'Michel Kossi AKPABLA',
  grade: 'Développeur web',
  profil: '/images/contributors/Michel.jpg',
  assertion:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus recusandae sapiente error neque laboriosam aliquam enim, soluta praesentium vitae quibusdam reiciendis id ab itaque commodi explicabo nisi. A, sed',
}

export const contributors: contributor[] = [amevi]
