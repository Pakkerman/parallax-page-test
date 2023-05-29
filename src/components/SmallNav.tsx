import type { AnimatedProps } from "@react-spring/web"
import type { CSSProperties } from "react"
import { animated } from "@react-spring/web"

export const SmallNav = (props: { style: AnimatedProps<CSSProperties> }) => {
  return (
    <animated.div style={props.style} className=" fixed top-0 z-50 w-full">
      <div className="flex w-full justify-end space-x-2 bg-black bg-opacity-40 text-black backdrop-blur-md">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Project</a>
        <a href="">Contact</a>
      </div>
    </animated.div>
  )
}
