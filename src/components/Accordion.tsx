import { animated, useSpring } from "@react-spring/web"
import { useState } from "react"
import useMeasure from "react-use-measure"

const Accordion = () => {
  return (
    <div className="relative flex w-[100vw] flex-col items-center space-y-2  bg-amber-500 p-2 text-amber-200">
      <h1 className="text-xl">Accordion</h1>
      <p className="text-center">This is Accordion!</p>
    </div>
  )
}

const AccordionWrapper = () => {
  const [show, setShow] = useState(false)
  const [ref, { height }] = useMeasure()
  const animation = useSpring({ height: show ? height : 0 })

  return (
    <div className=" flex flex-col items-center space-y-4">
      <animated.div style={animation} className="overflow-hidden">
        <div ref={ref}>
          <Accordion />
        </div>
      </animated.div>
      <button
        className="combo-button-outline border-interaction border-amber-600"
        onClick={() => setShow(!show)}
      >
        {`${show ? "Close" : "Open"} Accordion`}
      </button>
    </div>
  )
}

export default AccordionWrapper
