import type { NextPage } from "next/types"
import { animated, useSpring, config } from "@react-spring/web"
import { useState } from "react"

import Accordion from "~/components/Accordion"
import ContentBlock from "~/components/ContentBlock"
import Letters from "~/components/Letters"
import Modal from "~/components/Modal"
import Navbar from "~/components/Navbar"
import TrailingBoxes from "~/components/TrailingBoxes"
import Toast from "~/components/Toast"
import DragableBox from "~/components/DragableBox"

import { BsCaretDownFill } from "react-icons/bs"

const Home: NextPage = () => {
  const [showEllo, setShowEllo] = useState(false)

  const greet = useSpring({
    x: showEllo ? 1 : 0,
  })

  // useEffect(() => {
  //   const id = setInterval(() => setShowEllo(!showEllo), 1000)
  //   return () => clearInterval(id)
  // }, [showEllo])

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const float = useSpring({
    from: { transform: "translate3d(0,40%,0)" },
    to: { transform: "translate3d(0,0%,0)" },
    loop: true,
    config: config.wobbly,
  })

  return (
    <animated.div className="bg-fire h-[200svh] w-full " style={fadeIn}>
      <Toast show={showEllo} />
      <Navbar />
      <div className="m-auto flex h-[100svh] flex-col items-center justify-center space-y-5">
        <animated.p
          style={{
            opacity: greet.x.to((x) => x),
            transform: greet.x
              .to([1, 0], [0, 100])
              .to((x) => `translate3d(0,${x}%,0)`),
          }}
          className=" pointer-events-none text-5xl"
        >
          There
        </animated.p>
        <animated.button
          style={fadeIn}
          onClick={() => setShowEllo(!showEllo)}
          className="border-interaction rounded-xl border-2 border-amber-600 p-2"
        >
          Toggle Message
        </animated.button>
        <section className="flex w-full justify-center space-x-10">
          <Letters />
          <Modal />
          <DragableBox />
        </section>
        <Accordion />
        <TrailingBoxes />
        <animated.div style={float}>
          <BsCaretDownFill size={36} className="text-amber-600" />
        </animated.div>
      </div>
      <ContentBlock />
    </animated.div>
  )
}

export default Home
