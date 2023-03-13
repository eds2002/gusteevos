import Image from 'next/image'
import React from 'react'
import Button from '../elements/Button'
import Header from '../global/Header'
import Layout from '../global/Layout'
import TopHeader from '../global/TopHeader'

export default function Hero() {
  return (
    <section className="relative h-screen ">
      <Header />
      <div className="absolute inset-0 z-10 flex items-center justify-start">
        <Layout>
          <div className="flex items-center justify-start h-full">
            <div className="flex flex-col items-center max-w-md mx-auto text-center md:text-left md:items-start justfiy-center lg:max-w-lg md:mx-0">
              <h1 className="text-5xl font-bold md:text-4xl lg:text-5xl">
                Fine dining with Gusteevos
              </h1>
              <p className="mt-4 text-base xl:text-lg opacity-80">
                Our menu offers a range of dishes to suit all tastes, from
                appetizers to desserts. Come dine with us and experience our
                warm and inviting atmosphere.
              </p>
              <Button className="px-24 mt-8">Book Your Table</Button>
            </div>
          </div>
        </Layout>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/heroImage.png"
          className="object-cover"
          fill
          alt="Image of Beef wellington"
        />
      </div>
    </section>
  )
}
