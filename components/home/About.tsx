import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import Button from '../elements/Button'
import Layout from '../global/Layout'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section className="py-24 bg-amber-50" ref={ref}>
      <Layout>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row ">
          <div className="relative flex items-center justify-center flex-1 p-4">
            <motion.div
              style={{ y }}
              className="aspect-[2/2.5] rounded-md relative w-[80%] h-[70vh] md:h-full z-10 overflow-hidden"
            >
              <Image
                src="/wineImage.png"
                alt="Image of gusteevos building"
                fill
                className="relative object-cover "
              />
            </motion.div>
            <div className="absolute inset-0 h-[60%] md:w-[90%] border-4 rounded-md border-amber-400 m-auto" />
          </div>
          <div className="flex items-center justify-start flex-1 p-4 text-black">
            <div>
              <h2 className="relative text-4xl font-bold md:text-5xl lg:text-6xl">
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
