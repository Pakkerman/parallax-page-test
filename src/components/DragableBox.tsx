import { animated, useSpring } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { useEffect, useRef } from "react"

const DragableBox = () => {
  const bounce = useRef(0)
  const dragging = useRef(false)
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 400 },
  }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    dragging.current = down
  })

  useEffect(() => {
    const id = setInterval(() => {
      if (dragging.current) return
      bounce.current = bounce.current === 0 ? -30 : 0
      api.start({ y: bounce.current })
    }, 1000)
    return () => {
      clearInterval(id)
    }
  })

  return (
    <div className="flex h-full flex-col items-center space-y-2 rounded-lg border-2 border-amber-700 p-4">
      <h1 className="text-xl">Drag</h1>
      <div className="flex h-full items-end">
        <animated.div
          {...bind()}
          style={{ x, y }}
          className="border-interaction h-16 w-16 touch-none rounded-xl border-2 border-amber-500 bg-amber-700"
        ></animated.div>
      </div>
    </div>
  )
}

export default DragableBox
