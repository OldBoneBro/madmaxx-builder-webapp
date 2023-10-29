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
    const [vidStyleMid, setVidStyleMid] = useState(false)
    const clickedElems = useRef(null)
    const midElementMidPoint = useRef(461.5)

    const handleClick  = (event) => {

        const sameElement = clickedElems.current === event.target
        const greaterThanMidPoint = getElementMidPoint(event.target) > midElementMidPoint.current

        if(!sameElement) { 
            setVidStyle({
                position: "absolute",
                bgColor: '#FF0000',
                width: '731px',
                height: '411px',
                zIndex: '10',
                opacity: '0.5',
                translate: '96px',
            })
            setVidStyleMid({
                position: 'static',
                bgColor: '#00FF00',
                width: '548px',
                height: '308px',
                zIndex: '1',
                opacity: '0.5',
                translate: '496px',
                hidden: "true"
            })
        } else {
            setVidStyle({
                position: 'static',
                bgColor: '#1F1F1F',
                width: '548px',
                height: '308px',
                zIndex: '0',
                opacity: '1',
                translate: '0px',
            })
            setVidStyleMid({
                position: "absolute",
                bgColor: '#FFFFFF',
                width: '731px',
                height: '411px',
                zIndex: '10',
                opacity: '1',
                translate: '96px',
                hidden: "false"
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
                        <div className="rounded-[2.5rem] bg-[#1F1F1F] transition-all" onClick={handleClick} style={{ 
                            position: vidStyle.position,
                            backgroundColor: vidStyle.bgColor, 
                            width: vidStyle.width,
                            height: vidStyle.height,
                            zIndex: vidStyle.zIndex,
                            opacity: vidStyle.opacity,
                            translate: vidStyle.translate,
                        }}></div>}
                    {/* absolute left-24 */}
                    {(objEmpty(vidStyleMid)) ?
                        <div className="absolute left-24 flex w-[45.6875rem] h-[25.6875rem] justify-center items-center rounded-[2.5rem] bg-white transition-all" >
                            <div className="flex justify-center items-center w-[6.5rem] h-[6.5rem] rounded-full bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 bg-gradient-135 from-[#00EA87] via-[#78CBFF] to-[#4510ca]">
                                <PlaySvg width="44.373" height="44.373" defaultColorScheme={false}  />
                            </div>
                        </div> :
                        <div className="justify-center items-center rounded-[2.5rem] bg-white transition-all"style={{
                            position: vidStyleMid.position,
                            backgroundColor: vidStyleMid.bgColor, 
                            width: vidStyleMid.width,
                            height: vidStyleMid.height,
                            zIndex: vidStyleMid.zIndex,
                            opacity: vidStyleMid.opacity,
                            translate: vidStyleMid.translate,
                        }} >
                            {
                                (!vidStyleMid.hidden) ? <div className="flex justify-center items-center w-[6.5rem] h-[6.5rem] rounded-full bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 bg-gradient-135 from-[#00EA87] via-[#78CBFF] to-[#4510ca]">
                                    <PlaySvg width="44.373" height="44.373" defaultColorScheme={false}  />
                                </div> : ''
                            }
                        </div> 
                    }
                    <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] hover:bg-[#FF0000] hover:scale-x-[1.59] hover:scale-y-[1.345] hover:z-10 hover:opacity-50 hover:-translate-x-[14.4rem] hover:rounded-[2rem] transition-all hover:transition-all"></div>
                </div>
            </div>
        </div>

    )

}