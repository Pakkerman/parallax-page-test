import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si"
import { useScroll, animated, useSpring } from "@react-spring/web"
import {
  Parallax,
  ParallaxLayer,
  IParallax,
  IParallaxLayer,
} from "@react-spring/parallax"
import { NextPage } from "next/types"
import { useEffect, useRef } from "react"

const ProjectView = () => {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center">
      <div className="h-[70%] w-[80%] rounded-xl border-2 border-slate-300"></div>
      <div className="flex w-[80%] justify-center space-x-2 py-2 md:space-x-4">
        <div className="flex h-16 w-16 flex-col items-center justify-center">
          <SiReact size={36} />
          <p className="text-sm">React</p>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center">
          <SiNextdotjs size={36} />
          <p className="text-sm">Next.js</p>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center">
          <SiPrisma size={36} />
          <p className="text-sm">Prisma</p>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center">
          <SiTrpc size={36} />
          <p className="text-sm">tRPC</p>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center">
          <SiTailwindcss size={36} />
          <p className="text-sm">Tailwind</p>
        </div>
        <div className="flex h-16 w-16 flex-col items-center justify-center">
          <SiTypescript size={36} />
          <p className="text-sm">TypeScript</p>
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!)
  const layer = useRef<IParallaxLayer>(null!)

  useEffect(() => {
    parallax.current.scrollTo(2)
  }, [])

  return (
    <div
      className=""
      onClick={() => layer.current.setHeight(0)} // Temp solution for things behind nav layer unclickable
    >
      <Parallax ref={parallax} pages={4} className="bg-slate-500">
        {/* layout */}

        <ParallaxLayer factor={4} className="">
          <div className=""></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="text-clip text-4xl">
              is the more info and stuff here
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className=""></ParallaxLayer>
        {/* content */}
        <ParallaxLayer offset={0.5} speed={1} className="">
          {" "}
          <div className="px-2">
            <h1 className="text-end text-6xl">Pakkerman</h1>
            <h2 className="text-end text-4xl">Web Developer</h2>
          </div>
        </ParallaxLayer>

        {/* nav */}
        <ParallaxLayer
          ref={layer}
          offset={0.8}
          sticky={{ start: 0.8, end: 3 }}
          speed={1}
          className=""
        >
          <div className="flex h-16 w-full items-center justify-center space-x-3">
            <div
              onClick={() => parallax.current.scrollTo(0)}
              className="cursor-pointer"
            >
              Pakkerman
            </div>
            <div
              onClick={() => parallax.current.scrollTo(1)}
              className="cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => parallax.current.scrollTo(2)}
              className="cursor-pointer"
            >
              Projects
            </div>
            <div
              onClick={() => parallax.current.scrollTo(3)}
              className="cursor-pointer"
            >
              Certificates
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          ref={layer}
          offset={2}
          sticky={{ start: 2, end: 2.5 }}
          speed={1}
          className=""
        >
          <div className="flex h-32 w-full items-center justify-center space-x-3">
            <div
              onClick={() => parallax.current.scrollTo(0)}
              className="cursor-pointer"
            >
              Birdapp
            </div>
            <div
              onClick={() => parallax.current.scrollTo(1)}
              className="cursor-pointer"
            >
              Hangman
            </div>
            <div
              onClick={() => parallax.current.scrollTo(2)}
              className="cursor-pointer"
            >
              Beatramid
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.5} className="">
          <ProjectView />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1} className="">
          {" "}
          <div className="px-2">
            <h1 className="text-end text-6xl">Certificates</h1>
          </div>
        </ParallaxLayer>
        {/* page elements */}
        {/* <ParallaxLayer
          factor={0.05}
          offset={1}
          className="bg-slate-800 bg-opacity-40 backdrop-blur-md"
          speed={0}
        ></ParallaxLayer>
        <ParallaxLayer></ParallaxLayer> */}
      </Parallax>
    </div>
  )
}

export default Home
