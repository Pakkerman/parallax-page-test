import { animated, useSpring } from "@react-spring/web"
import type { SpringValues } from "@react-spring/web"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

type NavSpringValues = SpringValues<{
  value: number
}>

const Navbar = ({ animation }: { animation: NavSpringValues }) => {
  return (
    <animated.nav
      style={{
        transform: animation.value
          .to([0, 1], [100, 0])
          .to((value) => `translate3d(${value}%,0,0)`),
      }}
      className=" fixed right-0 flex h-full w-[30%] min-w-[200px] flex-col space-y-4 bg-amber-600 p-4 pt-20 text-amber-950"
      onClick={(event) => {
        event.stopPropagation()
      }}
    >
      <a href="#" className="text-4xl">
        Home
      </a>
      <a href="#" className="text-4xl">
        About
      </a>
      <a href="#" className="text-4xl">
        Projects
      </a>
      <a href="#" className="text-4xl">
        Contact
      </a>
    </animated.nav>
  )
}

const NavbarWrapper = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuAnimation = useSpring({
    value: showMenu ? 1 : 0,
    // transform: `translate3d(${!showMenu ? 100 : 0}%,0,0)`,
  })

  return (
    <div>
      <animated.div
        onClick={() => setShowMenu(false)}
        style={{
          opacity: menuAnimation.value.to((value) => value),
          pointerEvents: showMenu ? "all" : "none",
        }}
        className="fixed z-50 h-full w-full bg-black bg-opacity-20 backdrop-blur-sm"
      >
        <Navbar animation={menuAnimation} />
      </animated.div>
      <button className="fixed right-0 top-0 z-50 m-4">
        <AiOutlineMenu
          size={34}
          className="transition hover:scale-110 active:scale-90"
          onClick={() => setShowMenu(!showMenu)}
        />
      </button>
    </div>
  )
}

export default NavbarWrapper
