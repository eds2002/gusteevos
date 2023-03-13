import Link from 'next/link'
import React, { useState } from 'react'
import Layout from './Layout'
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineMenu,
} from 'react-icons/ai'
import Button from '../elements/Button'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
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
    linkName: 'About',
    href: '#',
  },
  {
    id: 'contactLink',
    linkName: 'Contact',
    href: '#',
  },
]

export default function Header() {
  const [openNav, setOpenNav] = useState(false)
  return (
    <>
      <header className="relative z-20 backdrop-blur-sm">
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
          <div className="flex items-center gap-3">
            <Button className="px-3 py-1.5">Order Online</Button>
            <MobileNav setOpenNav={setOpenNav} />
          </div>
        </Layout>
      </header>
      <AnimatePresence>
        {openNav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black md:hidden "
            >
              <div className="relative z-30 flex items-center justify-center w-full h-full bg-black">
                <nav className="flex flex-col items-center justify-center space-y-10 text-4xl md:hidden">
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{
                      type: 'spring',
                      duration: 0.7,
                    }}
                    onClick={() => setOpenNav(false)}
                    className="cursor-pointer"
                  >
                    <Image
                      src="/logoWhite.svg"
                      width={125}
                      height={125}
                      alt="Logo"
                    />
                  </motion.div>
                  {navigation.map((nav, index) => (
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{
                        type: 'spring',
                        duration: 0.7,
                      }}
                      key={nav.id}
                    >
                      <Link className="block px-2 mx-2" href="#">
                        {nav.linkName.split('').map((letter, index) => (
                          <motion.span
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                            transition={{
                              delay: index * 0.02,
                            }}
                            className="relative inline-block"
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <AiOutlineClose
                  className="p-0.5 text-4xl cursor-pointer absolute top-4 right-4"
                  onClick={() => setOpenNav(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileNav({ setOpenNav }: { setOpenNav: (val: boolean) => void }) {
  return (
    <div className="relative z-50 cursor-pointer md:hidden">
      <AiOutlineMenu className="text-3xl" onClick={() => setOpenNav(true)} />
    </div>
  )
}

function Nav() {
  return (
    <nav className="hidden md:block">
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
