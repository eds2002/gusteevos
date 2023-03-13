import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'
import Layout from '../global/Layout'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../elements/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [modal, setModal] = useState(true)
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (email === '') return
    setModal(true)
  }
  return (
    <>
      <section className="relative py-48">
        <Layout>
          <div className="relative z-10 flex flex-col items-center justify-center max-w-lg mx-auto text-center">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              New Customer?
            </h2>
            <p className="mt-4 text-base xl:text-lg opacity-70">
              We welcome our new customers with 15% percent coupon. Stay well
              informed about Gusteevos and find out what we&apos;re up to!{' '}
            </p>
            <form onSubmit={handleSubmit} className="relative mt-8">
              <input
                type="email"
                className="p-4 pr-24 text-black border rounded-full bg-white/90 placeholder:text-black/50"
                placeholder="janedoe@gmail.com"
                name="newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-2 rounded-full ">
                <div className="relative flex items-center justify-center h-full px-4 rounded-full bg-amber-500">
                  <AiOutlineArrowRight className="text-xl" />
                </div>
              </button>
            </form>
          </div>
        </Layout>
        <ImageBg />
      </section>
      <AnimatePresence>
        {modal && <SuccessModal setModal={setModal} />}
      </AnimatePresence>
    </>
  )
}

function SuccessModal({ setModal }: { setModal: (val: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/70"
    >
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        className="relative max-w-md p-6 overflow-hidden bg-stone-900 rounded-xl"
      >
        <div className="relative z-20">
          <h6 className="text-3xl font-bold">You&apos;re in</h6>
          <p className="mt-3 opacity-70">
            We just scammed you, you are never getting a discount. In fact, we
            will serve you raw food. Thanks for understanding! We hope to be
            serving you soon.
          </p>
          <Button className="mt-6" onClick={() => setModal(false)}>
            Great, thanks
          </Button>
        </div>
        <div className="absolute -inset-10 opacity-[0.025]">
          <Image
            src="/ingredientsVector.svg"
            alt="Image of ingredients"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

const ImageBg = () => (
  <div className="absolute inset-0 outline-none pointer-events-none select-none">
    <Image
      src="/freshIngredients.png"
      fill
      alt="Image of fresh ingredients"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
)
