import Navigatinon from "../navigation/Navigation.jsx"
import { PlaySvg }  from "../imgs/svgs/components/Play.jsx"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { getVidStyles } from "../inline-styles/vidStyles.js"
import { gsap } from "gsap"

const objEmpty = (obj) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) return false
    }

    return true
}

export default function Style09() {

    const [vidLeft, setVidLeft] = useState({})
    const [vidMid, setVidMid] = useState({})
    const [vidRight, setVidRight] = useState({})
    const left = useRef(null)
    const mid = useRef(null)
    const right = useRef(null)
    const clickedElem = useRef(null)
    const playButton = useRef(null)

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.from(playButton.current, {
                duration: 0.25,
                ease: 'none',
                visibility: 1,
            })
            gsap.to(playButton.current, {
                duration: 0.25,
                ease: 'none',
                height: 0,
            })
        })

        return () => ctx.revert()

    }, [])

    const handleClick  = (event) => {

        if (clickedElem.current === event.target) return

        let currentVidBox = (left.current === event.target) ? 1 : (right.current === event.target) ? 3 : 2
        const styles  = [...getVidStyles(currentVidBox)]
        console.log(styles)
        setVidLeft(styles[0])
        setVidMid(styles[1])
        setVidRight(styles[2])
        clickedElem.current = event.target

    }

    //W: 74.969 H: 74.94
    return(

        <div className="flex flex-col w-[90rem] items-start">
            <Navigatinon />
            <div className="flex w-full px-[19.5rem] py-24 flex-col items-center gap-20">
                <div className="flex flex-col items-center gap-10 self-stretch">
                    <h2 className="self-stretch dark:text-white text-[#404040] text-center font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                    <p className="w-[33.75rem] text-[#757575] text-center font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                </div>
                <div className="relative flex w-[57.6875rem] h-[25.6875rem] items-center justify-center">
                    <div className="absolute z-[9998] flex justify-center items-center w-[6.5rem] h-[6.5rem] rounded-full bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 bg-gradient-135 from-[#00EA87] via-[#78CBFF] to-[#4510ca]" ref={playButton}>
                        <PlaySvg width="44.373" height="44.373" defaultColorScheme={false}  />
                    </div>
                    {
                        (objEmpty(vidLeft)) ? 
                            <div className="flex justify-center items-center w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] transition-all ease-in-out" onClick={handleClick} ref={left}></div> : 
                            <div className="rounded-[2.5rem] bg-[#1F1F1F] transition-all ease-in-out" onClick={handleClick} style={vidLeft} ref={left}></div>
                    }
                    {
                        (objEmpty(vidMid)) ?
                            <div className="absolute left-24 flex w-[45.6875rem] h-[25.6875rem] justify-center items-center rounded-[2.5rem] bg-white transition-all ease-in-out" onClick={handleClick} ref={mid}>
                            </div> :
                            <div className="justify-center items-center rounded-[2.5rem] bg-white transition-all ease-in-out" onClick={handleClick} style={vidMid} ref={mid}>
                            </div> 
                    }
                    {
                        (objEmpty(vidRight)) ?
                            <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] transition-all ease-in-out" onClick={handleClick} ref={right}></div> :
                            <div className="flex justify-center items-center w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] transition-all ease-in-out" onClick={handleClick} style={vidRight} ref={right}></div>

                    }
                </div>
            </div>
        </div>

    )

}