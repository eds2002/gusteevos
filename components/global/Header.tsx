import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import { AiFillCaretDown } from 'react-icons/ai'
import Button from '../elements/Button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="">
      <Layout className="flex items-center justify-between py-1">
        <Link
          href="/"
          className="relative inline-block text-xl font-semibold select-none"
        >
          <Image
            src="/logoWhite.svg"
            alt="Gusteevos logo"
            className="pointer-events-none"
            width={65}
            height={65}
            priority
          />
        </Link>
        <Nav />
        <Button className="px-3 py-2">Order Online</Button>
      </Layout>
    </header>
  )
}

function Nav() {
  const navigation = [
    {
      id: 'homeLink',
      linkName: 'Home',
      href: '/',
    },
    {
      id: 'menuLink',
      linkName: 'Menu',
      subLinks: [
        {
          linkName: 'Breakfast',
          href: '#',
        },
        {
          linkName: 'Lunch',
          href: '#',
        },
        {
          linkName: 'Dinner',
          href: '#',
        },
      ],
    },
    {
      id: 'aboutLink',
      linkName: 'About us',
      href: '#',
    },
    {
      id: 'contactLink',
      linkName: 'Contact Us',
      href: '#',
    },
  ]
  return (
    <nav>
      {navigation.map((nav) => (
        <React.Fragment key={nav.id}>
          {nav.subLinks ? (
            <div className="relative inline-flex px-2 mx-2 cursor-pointer group">
              <p className="flex items-center gap-1">
                <span>{nav.linkName}</span>
                <span>
                  <AiFillCaretDown className="w-3 h-3" />
                </span>
              </p>
              <div className="absolute flex flex-col items-start justify-center invisible w-auto divide-y rounded-sm pointer-events-none bg-black/50 backdrop-blur-sm group-hover:visible group-hover:pointer-events-auto top-6 divide-white/20">
                {nav.subLinks.map((subLink, index) => (
                  <Link
                    href={subLink.href}
                    key={subLink.linkName + index}
                    className="w-full py-2 pl-2 pr-12"
                  >
                    {subLink.linkName}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link className="px-2 mx-2" href={nav.href}>
              {nav.linkName}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
