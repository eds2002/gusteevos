import React, { ReactNode } from 'react'

export default function Layout({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`${className} max-w-7xl lg:px-6 px-4 mx-auto w-full h-full`}
    >
      {children}
    </div>
  )
}
