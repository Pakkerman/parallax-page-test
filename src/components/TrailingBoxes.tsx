import { animated, useTrail } from "@react-spring/web"
import { useRef } from "react"

const itemsOpacity = [0.2, 0.4, 0.6, 0.8, 1]

const TrailingBoxes = () => {
  const show = useRef(false)
  const [trail, api] = useTrail(itemsOpacity.length, () => ({
    from: { opacity: 0, transform: `translate3d(0,200%,0)` },
    to: { opacity: 1, transform: `translate3d(0,0%,0)` },
  }))

  return (
    <div
      onClick={() => {
        if (show.current) {
          api.start({ opacity: 1, transform: `translate3d(0,0%,0)` })
        } else {
          api.start({ opacity: 0, transform: `translate3d(0,200%,0)` })
        }
        show.current = !show.current
      }}
    >
      <h1 className="h-10 text-xl">Trailing Boxes</h1>
      <div className="flex justify-center space-x-4 ">
        {trail.map((spring, i) => (
          <animated.div
            key={i}
            className=" h-[50px] w-[50px] rounded-xl bg-amber-700"
            style={{ ...spring }}
          ></animated.div>
        ))}
      </div>
    </div>
  )
}

const TrailingBoxesWrapper = () => {
  return (
    <div className="combo-backdrop max-w-[90%] overflow-hidden rounded-lg border-2 border-amber-700 p-4 ">
      <TrailingBoxes />
    </div>
  )
}

export default TrailingBoxesWrapper
