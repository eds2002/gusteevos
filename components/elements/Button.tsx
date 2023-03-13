import Link from 'next/link'
import React, { ReactNode } from 'react'

type Styles = 'default' | 'chip'

export default function Button({
  href,
  children,
  type = 'default',
  className,
  onClick,
}: {
  href?: string
  children: ReactNode
  type?: Styles
  className?: string
  onClick?: any
}) {
  let style

  switch (type) {
    case 'default':
      style = `${className} border border-amber-400 rounded-sm px-6 py-3`
  }

  return (
    <>
      {href ? (
        <Link href={href} className={style}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className={style}>
          {children}
        </button>
      )}
    </>
  )
}
