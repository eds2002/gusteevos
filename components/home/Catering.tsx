import Image from 'next/image'
import React from 'react'
import Button from '../elements/Button'

export default function Catering() {
  return (
    <section className="flex items-center justify-center h-[80vh] gap-6">
      <div className="relative flex-1 w-full h-full bg-amber-600">
        <Image
          src="/cateringImg.png"
          alt="Image of catering"
          fill
          className="relative object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/20">
          <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto text-center md:hidden">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Party coming up?
            </h2>
            <p className="mt-4 text-base xl:text-lg opacity-70">
              Have a party coming up? Gusteevos offers cattering at prices
              you&apos;ll love, contact us today!
            </p>
            <Button className="mt-8">Contact us</Button>
          </div>
        </div>
      </div>
      <div className="flex-col items-start justify-center flex-1 hidden md:flex">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Party coming up?
          </h2>
          <p className="mt-4 text-base xl:text-lg opacity-70">
            Have a party coming up? Gusteevos offers catering at prices
            you&apos;ll love, contact us today!
          </p>
          <Button className="mt-8">Contact us</Button>
        </div>
      </div>
    </section>
  )
}
