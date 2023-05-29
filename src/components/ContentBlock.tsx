import { animated, useTrail } from "@react-spring/web"
import { Waypoint } from "react-waypoint"

const ContentBlock = () => {
  const [trail, trailApi] = useTrail(content.length, () => ({
    from: { opacity: 0 },
  }))

  return (
    <div className=" mx-auto h-[100svh] max-w-[90%]">
      <Waypoint
        bottomOffset="50%"
        onEnter={() => trailApi.start({ to: { opacity: 1 } })}
        onLeave={() => trailApi.start({ to: { opacity: 0 } })}
      />
      {trail.map((style, i) => (
        <animated.div style={style} key={i}>
          <h1 className="text-xl font-bold">Lorem {i + 1}</h1>
          <p>{content[i]}</p>
          <br />
        </animated.div>
      ))}
    </div>
  )
}

export default ContentBlock

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus necessitatibus temporibus esse nemo harum, optio fuga, ipsam architecto recusandae distinctio, magnam quod autem aspernatur cumque nostrum alias voluptates! Voluptates?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio eveniet ipsa ad sint suscipit adipisci expedita soluta. Eum facilis distinctio quae! Cum, beatae? Aliquam praesentium enim corporis repellendus repellat?",
  "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eveniet quos quo, voluptatum impedit corrupti magni asperiores veniam nemo nostrum voluptate ducimus aut mollitia porro. Laborum, error. Ab, eaque suscipit.",
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium magni, et amet natus quo porro ex in quis incidunt commodi iste, voluptas quia nulla numquam nostrum ut veniam sint. Adipisci?",
]
