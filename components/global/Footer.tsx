import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {
  const footerNav = [
    {
      linkName: 'About Us',
      subLinks: [
        {
          linkName: 'Our story',
          href: '#',
        },
        {
          linkName: 'Newsroom',
          href: '#',
        },
        {
          linkName: 'Careers',
          href: '#',
        },
      ],
    },
    {
      linkName: 'Find',
      subLinks: [
        {
          linkName: 'Menu',
          href: '#',
        },
        {
          linkName: 'Nutrional Guide',
          href: '#',
        },
        {
          linkName: 'Locations',
          href: '#',
        },
      ],
    },
    {
      linkName: 'Order and Reserve',
      subLinks: [
        {
          linkName: 'Dine-In Reservations',
          href: '#',
        },
        {
          linkName: 'Gift-Cards',
          href: '#',
        },
        {
          linkName: 'Catering & To Go',
          href: '#',
        },
      ],
    },
    {
      linkName: 'Company',
      subLinks: [
        {
          linkName: 'Privacy Policy',
          href: '#',
        },
        {
          linkName: 'Notice of Rights to Opt-out',
          href: '#',
        },
        {
          linkName: 'CCPA Privacy Policy',
          href: '#',
        },
        {
          linkName: 'Accessibility',
          href: '#',
        },
        {
          linkName: 'Terms of use',
          href: '#',
        },
      ],
    },
  ]

  const socialMedia = [
    {
      id: 'instagram',
      icon: AiOutlineInstagram,
      href: '#',
    },
    {
      id: 'facebook',
      icon: AiOutlineFacebook,
      href: '#',
    },
    {
      id: 'twitter',
      icon: AiOutlineTwitter,
      href: '#',
    },
  ]

  return (
    <footer className="py-24">
      <Layout>
        <Image
          src="/logoWhite.svg"
          alt="Logo of gusteevos"
          width={65}
          height={65}
        />
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-1">
            <p className="max-w-xs opacity-70">
              Serving quality food since 2002
            </p>
            <div className="mt-1">
              {socialMedia.map((val) => (
                <Link href="#" target={'_blank'} key={val.id}>
                  <val.icon className="inline-flex mr-4 text-xl opacity-70" />
                </Link>
              ))}
            </div>
          </div>
          {footerNav.map((links, index) => (
            <div
              key={links.linkName + index}
              className="flex flex-col items-start"
            >
              <h4 className="mb-2 font-medium uppercase">{links.linkName}</h4>
              {links.subLinks.map((sublink) => (
                <Link
                  href={sublink.href}
                  key={sublink.linkName}
                  className="py-1 opacity-70 my-0.5 text-sm"
                >
                  {sublink.linkName}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full mt-10 border-t border-white/10 ">
          <span className="relative inline-block pt-4 text-sm opacity-60">
            © {new Date().getFullYear()} Gusteevos - US, Inc. All Rights
            Reserved.
          </span>
        </div>
      </Layout>
    </footer>
  )
}
