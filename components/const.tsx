export const appTitle = 'Docs.Hemato'

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
