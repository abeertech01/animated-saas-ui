"use client"

import Tag from "@/components/Tag"
import { useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`
const words = text.split(" ")

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"], // explanation is given in the bottom
  })
  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest)
    })
  }, [wordIndex])

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="top-20 md:top-28 lg:top-40 sticky">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="mt-10 font-medium text-4xl md:text-6xl lg:text-7xl text-center">
            <span>Your creative process deserves better.</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "text-white/15 transition duration-500",
                    wordIndex < currentWord && "text-white",
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block text-lime-400">
              Tha&apos;s why we built Layers.
            </span>
          </div>
        </div>
        <div ref={scrollTarget} className="h-[150vh]"></div>
      </div>
    </section>
  )
}

/** Everything explained **
  offset: ["start end", "end end"]
  - start end: means when the top of the target element reaches the bottom of the viewport
  - end end: means when the bottom of the target element reaches the bottom of the viewport

  useTransform(scrollYProgress, [0, 1], [0, words.length])
  - This is the key connection. useTransform maps the scroll progress (0→1) to word indices (0→words.length). progress 0-100% = 0→words.length
 */
