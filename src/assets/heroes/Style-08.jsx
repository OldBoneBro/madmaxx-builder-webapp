import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { useState, useRef } from "react"

export default function Style08() { 

    const [translation, setTranslation] = useState('')
    const midPoint = useRef(720)
    const clickedElems = useRef(null)

    const getElementMidPoint = (elem) => elem.offsetLeft + (elem.offsetWidth / 2)

    const handleClick = (event) => {
        
        const centerOffset = getElementMidPoint(event.target) - midPoint.current
        const sameElement = clickedElems.current === event.target
        const newTransition = (sameElement) ? `translateX(0px)`: `translateX(${centerOffset * -1}px)`
        clickedElems.current = (sameElement) ? null : event.target
        setTranslation(newTransition)

    }

    return(
        
        <div className="flex flex-col w-[90rem] items-start overflow-hidden">
            <Navigatinon />
            <div className="flex w-full px-20 py-24 flex-col items-start gap-16">
                <div className="flex flex-col items-start gap-10 self-stretch">
                    <div className="flex flex-col items-start gap-10 self-stretch">
                        <h2 className="self-stretch dark:text-white text-[#404040] font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                        <p className="w-[33.75rem] text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <ButtonPrimary width="w-[8.875rem]" />
                        <ButtonTertiary width="w-[8.875rem]" />  
                    </div>
                </div>
                <div className={`flex items-end gap-10 transition-transform duration-200`} style={{ transform: translation }}>
                    <div className="w-[36.125rem] h-[20.3125rem] rounded-[2.5rem] hover:transition-colors hover:bg-white bg-[#1F1F1F]" onClick={handleClick} id="slide-1"></div>
                    <div className="w-[36.125rem] h-[20.3125rem] rounded-[2.5rem] hover:transition-colors hover:bg-white bg-[#1F1F1F]" onClick={handleClick} id="slide-2"></div>
                    <div className="w-[36.125rem] h-[20.3125rem] rounded-[2.5rem] hover:transition-colors hover:bg-white bg-[#1F1F1F]" onClick={handleClick} id="slide-3"></div>
                </div>
            </div>

        </div>

    )

}
