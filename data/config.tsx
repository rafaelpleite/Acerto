import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

interface HeaderLink {
  id?: string;
  label: string;
  href?: string;
  variant?: string;
}

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Acerto',
    description: 'Acompanhe suas dívidas e acerte suas contas',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'home',
        label: 'Início',
      },
      {
        id: 'features',
        label: 'Benefícios',
      },
      {
        id: 'pricing',
        label: 'Ver dívidas',
        variant: 'primary',
      },
    ] as HeaderLink[],
  },
  footer: {
    copyright: (
      <>
        Feito por {' '}
        <Link href="https://github.com/rafaelpleite">Rafael Prudêncio Leite</Link> para o case de cientista de dados.
      </>
    ),
    links: [
      {
        href: 'mailto:rafael.lprudencio1@gmail.com',
        label: 'Contato',
      },
      {
        href: 'https://github.com/rafaelpleite',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
