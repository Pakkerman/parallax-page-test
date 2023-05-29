import { animated, useTransition } from "@react-spring/web"

const Toast = (props: { show: boolean }) => {
  const transition = useTransition(props.show, {
    from: { opacity: 0, transform: `translate3d(0,-100%,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0%,0)` },
    leave: { opacity: 0, transform: `translate3d(0,-100%,0)` },
  })
  return (
    <div>
      {transition((style, show) => {
        if (show)
          return (
            <div className="relative flex justify-center">
              <animated.div
                className="absolute mt-4 rounded-lg bg-custom-orange bg-opacity-40 p-4 text-4xl backdrop-blur-lg"
                style={style}
              >
                Hello
              </animated.div>
            </div>
          )
      })}
    </div>
  )
}

export default Toast
