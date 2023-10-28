import Navigatinon from "../navigation/Navigation.jsx"
import { PlaySvg }  from "../imgs/svgs/components/Play.jsx"
import { useRef, useState } from "react"
import { getElementMidPoint } from "../../utils/getElementMidPoint.js"

const objEmpty = (obj) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) return false
    }

    return true
}

export default function Style09() {

    const [vidStyle, setVidStyle] = useState({})
    const clickedElems = useRef(null)
    const midElementMidPoint = useRef(461.5)

    const handleClick  = (event) => {

        const sameElement = clickedElems.current === event.target
        const greaterThanMidPoint = getElementMidPoint(event.target) > midElementMidPoint.current
        console.log(getElementMidPoint(event.target))

        if(!sameElement) { 
            setVidStyle({
                bgColor: '#FF0000',
                xScale: '1.59',
                yScale: '1.345',
                zIndex: '10',
                opacity: '0.5',
                translate: '230.4px',
                borderRadius: '32px'
            })
        } else {
            setVidStyle({
                bgColor: '#1F1F1F',
                xScale: '1',
                yScale: '1',
                zIndex: '0',
                opacity: '1',
                translate: '0px',
                borderRadius: '40px'
            })
        }

        clickedElems.current = (sameElement) ? null : event.target

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
                <div className=" relative flex w-[57.6875rem] h-[25.6875rem] items-center">
                    {(objEmpty(vidStyle)) ? 
                        <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] transition-all" onClick={handleClick} ></div> : 
                        <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] transition-all" onClick={handleClick} style={{ 
                            backgroundColor: vidStyle.bgColor, 
                            transform: `scale(${vidStyle.xScale}, ${vidStyle.yScale})`,
                            zIndex: vidStyle.zIndex,
                            opacity: vidStyle.opacity,
                            translate: vidStyle.translate,
                            borderRadius: vidStyle.borderRadius,
                        }}></div>}
                    {/* absolute left-24 */}
                    <div className="flex w-[45.6875rem] h-[25.6875rem] justify-center items-center rounded-[2.5rem] bg-white" >
                        <div className="flex justify-center items-center w-[6.5rem] h-[6.5rem] rounded-full bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 bg-gradient-135 from-[#00EA87] via-[#78CBFF] to-[#4510ca]">
                            <PlaySvg width="44.373" height="44.373" defaultColorScheme={false}  />
                        </div>
                    </div>
                    <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] hover:bg-[#FF0000] hover:scale-x-[1.59] hover:scale-y-[1.345] hover:z-10 hover:opacity-50 hover:-translate-x-[14.4rem] hover:rounded-[2rem] transition-all hover:transition-all"></div>
                </div>
            </div>
        </div>

    )

}