"use client"

import Button from "@/components/Button"
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image"
import Pointer from "@/components/Pointer"
import { motion, useAnimate } from "motion/react"
import { useEffect } from "react"
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ])
  }, [])

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="relative container">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="hidden lg:block top-16 -left-32 absolute"
        >
          <Image
            src={designExample1Image}
            draggable="false"
            alt="Design Example 1 Image"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="hidden lg:block top-96 left-56 absolute"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="hidden lg:block -top-16 -right-64 absolute"
        >
          <Image
            src={designExample2Image}
            draggable="false"
            alt="Design Example 2 Image"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="hidden lg:block -top-4 right-80 absolute"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex bg-linear-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full font-semibold text-neutral-950">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="mt-6 font-medium text-6xl md:text-7xl lg:text-8xl text-center">
          Impactful design, created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-white/50 text-xl text-center">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex mx-auto mt-8 p-2 border border-white/15 rounded-full md:max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="md:flex-1 bg-transparent px-4 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            {/* <Button variant="primary" type="submit" className="whitespace-nowrap"> */}
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  )
}
