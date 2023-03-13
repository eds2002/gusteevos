import Image from 'next/image'
import React from 'react'
import Button from '../elements/Button'
import Layout from '../global/Layout'

export default function About() {
  return (
    <section className="py-24 bg-amber-50">
      <Layout>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row ">
          <div className="relative flex items-center justify-center flex-1 p-4">
            <div className="aspect-[2/2.5] rounded-md relative w-[80%] h-[70vh] md:h-full z-10 overflow-hidden">
              <Image
                src="/wineImage.png"
                alt="Image of gusteevos building"
                fill
                className="relative object-cover "
              />
            </div>
            <div className="absolute inset-0 h-[60%] md:w-[90%] border-4 rounded-md border-amber-400 m-auto" />
          </div>
          <div className="flex items-center justify-start flex-1 p-4 text-black">
            <div>
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Fine dining since 2002
              </h2>
              <p className="mt-4 text-base xl:text-lg opacity-70">
                Our team of experienced chefs and servers work together to
                create an exceptional dining experience for our guests. Visit us
                today and taste the difference!
              </p>
              <Button className="mt-8">Reserve my table</Button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}
