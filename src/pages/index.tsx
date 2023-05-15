import { easings } from "@react-spring/web"
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
import { useEffect, useRef, useState } from "react"

const ProjectView = () => {
  return (
    <div className=" fixed bottom-0 flex h-[90svh] w-full flex-col items-center justify-center">
      <div className="h-full w-[80%] rounded-xl border-2 border-slate-300">
        <div className=" flex h-full  w-full  flex-col items-center justify-between">
          <div className=" preview h-[80%] w-full"> placeholder for image</div>
          <div className="preview  h-[20%] w-full border-t-2  border-slate-300">
            project infos
          </div>
        </div>
      </div>
      <ul className="flex w-[80%] justify-center space-x-2 py-2 md:space-x-4 ">
        <li className="flex h-16 w-16 flex-col items-center justify-center">
          <SiReact size={36} />
          <p className="text-sm">React</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center justify-center">
          <SiNextdotjs size={36} />
          <p className="text-sm">Next.js</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center justify-center">
          <SiPrisma size={36} />
          <p className="text-sm">Prisma</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center justify-center">
          <SiTrpc size={36} />
          <p className="text-sm">tRPC</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center justify-center">
          <SiTailwindcss size={36} />
          <p className="text-sm">Tailwind</p>
        </li>
        <li className="flex h-16 w-16 flex-col items-center justify-center">
          <SiTypescript size={36} />
          <p className="text-sm">TypeScript</p>
        </li>
      </ul>
    </div>
  )
}

const Home: NextPage = () => {
  // const [load, setLoad] = useState(false)
  const parallax = useRef<IParallax>(null!)
  const layer = useRef<IParallaxLayer>(null!)
  const fade = useSpring({
    from: {
      scale: "105%",
      opacity: 0,
      y: "-100px",
    },
    to: {
      scale: "100%",
      opacity: 1,
      y: "0px",
    },
    delay: 500,
  })

  const [showMenu, setShowMenu] = useState(false)
  const menuAnimation = useSpring({
    x: showMenu ? 0 : 100,
  })

  useEffect(() => {
    // parallax.current.scrollTo(2)
  }, [])

  return (
    <div
      className=""
      onClick={() => {
        // return layer.current.setHeight(0)
        setShowMenu(!showMenu)
      }} // Temp solution for things behind nav layer unclickable
    >
      <nav className="">
        <animated.div
          style={{
            transform: menuAnimation.x.to(
              (value) => `translate3d(0,-${value}%,0)`
            ),
          }}
          className="bg-fire fixed z-10 flex h-[30%] w-full flex-col items-center justify-evenly space-y-4"
        >
          <a className="text-2xl" href="#">
            Home
          </a>
          <a className="text-2xl" href="#">
            About
          </a>
          <a className="pointer-events-none text-2xl" href="#">
            Project
          </a>
          <a className="text-2xl" href="#">
            Contact
          </a>
        </animated.div>
        <animated.div
          style={{
            transform: menuAnimation.x.to(
              (value) => `translate3d(0,${value}%,0)`
            ),
          }}
          className="preview bg-fire fixed bottom-0 z-10 h-[70%] w-full"
        ></animated.div>
      </nav>
      <Parallax
        ref={parallax}
        pages={3}
        // config={{ easing: easings.easeInOutExpo, duration: 0 }}
        className="bg-fire"
      >
        <ParallaxLayer factor={1} offset={0} speed={-0.2} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/background.png"
              alt=""
              className="h-[100svh] object-cover"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0} speed={0} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/mountains.png"
              alt=""
              className="z-20 h-[100svh] object-cover"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0} speed={0.2} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/jungle1.png"
              alt=""
              className="z-20 h-[100svh] object-cover"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0} speed={0.4} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/jungle2.png"
              alt=""
              className="z-20 h-[100svh] object-cover"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0} speed={0.6} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/jungle3.png"
              alt=""
              className="z-20 h-[100svh] object-cover"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0} speed={0.8} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/jungle4.png"
              alt=""
              className="z-20 h-[100svh]  object-cover"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={0} speed={1} className="">
          <div className="">
            <animated.img
              style={fade}
              src="./firewatch/man_on_mountain.png"
              alt=""
              className="z-20 h-[100svh] object-cover"
            />
          </div>

          <ParallaxLayer
            factor={4}
            offset={1}
            className="bg-fire "
          ></ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Home
