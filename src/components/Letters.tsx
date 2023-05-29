const letters: { letter: string; key: number }[] = [
  { letter: "P", key: 1 },
  { letter: "A", key: 2 },
  { letter: "K", key: 3 },
  { letter: "K", key: 4 },
  { letter: "E", key: 5 },
  { letter: "R", key: 6 },
  { letter: "M", key: 7 },
  { letter: "A", key: 8 },
  { letter: "N", key: 9 },
]

import { animated, useSpringRef, useTransition } from "@react-spring/web"
import { useEffect, useState } from "react"

const Letters = () => {
  const [letterIdx, setLetterIdx] = useState(0)

  const letterRef = useSpringRef()
  const letterTransition = useTransition(letterIdx, {
    from: { opacity: 1, transform: "translate3d(0,150%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: { opacity: 0.5, transform: "translate3d(0,-150%,0)" },
  })

  useEffect(() => {
    const id = setTimeout(() => {
      setLetterIdx((prev) => (prev + 1) % letters.length)
    }, 2000)
    letterRef.start()
    return () => {
      clearTimeout(id)
    }
  }, [letterIdx, letterRef])

  return (
    <div className="flex h-full flex-col items-center space-y-2 rounded-lg border-2 border-amber-700 p-4">
      <h1 className="text-xl">Letters</h1>
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border-2 border-amber-600">
        {letterTransition((style, idx) => {
          const item = letters[idx]
          return (
            <animated.div
              style={{ ...style }}
              className="absolute"
              key={item?.key}
            >
              {item?.letter}
            </animated.div>
          )
        })}
      </div>
      <animated.button
        onClick={() => setLetterIdx((letterIdx + 1) % letters.length)}
        className="border-interaction h-12 w-12 rounded-xl border-2 border-amber-600 p-2"
      >
        {letterIdx}
      </animated.button>
    </div>
  )
}

export default Letters
