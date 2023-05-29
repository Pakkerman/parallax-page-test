import { animated, useTransition } from "@react-spring/web"
import { useState } from "react"

const Modal = ({ close }: { close: () => void }) => {
  return (
    <animated.div
      onClick={(event) => {
        event.stopPropagation()
      }}
      className="combo-backdrop flex min-h-[20%] min-w-[30%] max-w-md flex-col items-center justify-center space-y-4 rounded-lg border-2 border-amber-500 p-6"
    >
      <h1 className="text-center text-2xl">Modal</h1>
      <p className="flex h-20 items-center">
        Time for some modal, there you go
      </p>
      <button
        className="border-interaction rounded-lg border-2 border-amber-600 p-2 text-lg"
        onClick={close}
      >
        Close
      </button>
    </animated.div>
  )
}

const ModalWrapper = () => {
  const [show, setShow] = useState(false)

  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div className="flex h-full flex-col items-center space-y-2 rounded-lg border-2 border-amber-700 p-4 ">
      <h1 className="text-xl">Modal</h1>
      {transition((style, show) => {
        return (
          show && (
            <animated.div
              style={{ ...style, pointerEvents: show ? "all" : "none" }}
              className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black  bg-opacity-20 backdrop-blur-sm"
              onClick={() => setShow(false)}
            >
              <Modal close={() => setShow(false)} />
            </animated.div>
          )
        )
      })}
      <div className="8 flex h-full items-end">
        <button
          className="border-interaction rounded-lg border-2 border-amber-600 p-2"
          onClick={() => setShow(!show)}
        >
          {show ? "Close" : "Open"}
        </button>
      </div>
    </div>
  )
}

export default ModalWrapper
