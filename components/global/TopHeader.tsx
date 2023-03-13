import Link from 'next/link'
import React from 'react'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import Layout from './Layout'

export default function TopHeader() {
  return (
    <header className="w-full py-1 bg-black/60 backdrop-blur-xl">
      <Layout className="flex items-center justify-between">
        <SocialMedias />
        <HelpfulLinks />
      </Layout>
    </header>
  )
}

function SocialMedias() {
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
    <div>
      {socialMedia.map((val) => (
        <Link href="#" target={'_blank'} key={val.id}>
          <val.icon className="inline-flex mx-1" />
        </Link>
      ))}
    </div>
  )
}

function HelpfulLinks() {
  const links = [
    {
      id: 1,
      linkName: 'Gift Cards',
      href: '#',
    },
    {
      id: 2,
      linkName: 'Contact Support',
      href: '#',
    },
  ]
  return (
    <div>
      {links.map((link) => (
        <Link
          href={link.href}
          className="px-2 mx-2 text-xs sm:text-sm"
          key={link.id}
        >
          {link.linkName}
        </Link>
      ))}
    </div>
  )
}
