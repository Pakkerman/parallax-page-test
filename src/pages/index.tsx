import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { NextPage } from "next/types";
import { useRef } from "react";

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className="h-full w-full bg-slate-800">
      <Parallax ref={parallax} pages={4} className="bg-slate-800">
        <ParallaxLayer speed={0.2} offset={0} factor={1} className="bg-red-500">
          <div className="mx-4 flex h-[40%] flex-col justify-center">
            <h1 className="text-right text-6xl">Pakkerman</h1>
            <h1 className="text-right text-4xl">Web Developer</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.3}
          offset={0.6}
          factor={1}
          className="bg-indigo-500"
        >
          <h1 className="text-6xl">this is nav</h1>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          offset={0.7}
          factor={1}
          className=" bg-orange-500"
        >
          <h1 className="text-6xl">3</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.7}
          offset={0.8}
          factor={1}
          className="bg-zinc-500"
        >
          <h1 className="text-6xl">4</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={0.9}
          factor={3.1}
          className="bg-lime-500"
        >
          <h1 className="text-6xl"></h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0}
          offset={0.9}
          factor={3.1}
          className="bg-lime-500"
        >
          <h1 className="text-6xl">this will be the main page</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          className="w-full border-[1px] border-yellow-400"
          onClick={() => parallax.current.scrollTo(1)}
        >
          marker1
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          className="w-full border-[1px] border-yellow-400"
          onClick={() => parallax.current.scrollTo(2)}
        >
          marker2
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          className="w-full border-[1px] border-yellow-400"
          onClick={() => parallax.current.scrollTo(3)}
        >
          marker3
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          className="w-full border-[1px] border-yellow-400"
          onClick={() => parallax.current.scrollTo(0)}
        >
          marker4
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
