import Button from "@/components/Button"
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image"
import Pointer from "@/components/Pointer"

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="relative container">
        <div className="hidden lg:block top-16 -left-32 absolute">
          <Image src={designExample1Image} alt="Design Example 1 Image" />
        </div>
        <div className="hidden lg:block -top-16 -right-64 absolute">
          <Image src={designExample2Image} alt="Design Example 2 Image" />
        </div>
        <div className="hidden lg:block top-96 left-56 absolute">
          <Pointer name="Andrea" />
        </div>
        <div className="hidden lg:block -top-4 right-80 absolute">
          <Pointer name="Bryan" color="red" />
        </div>
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
            className="md:flex-1 bg-transparent px-4"
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
