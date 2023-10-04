import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { useEffect, useRef } from "react"
import { Engine, Render } from "matter-js"

export default function Style01() {

    const canvas = useRef(null)
    const engine  = useRef(Engine.create())

    useEffect(() => {

    }, [])

    return(
        <div className="flex flex-col w-[90rem] h-[56.25rem] gap-[4.5rem] relative overflow-hidden">
            <Navigatinon style={11} />
            <div ref={canvas} className="absolute left-[39.8125rem] w-[50.1875rem] h-full z-50"></div>
            <div className="flex gap-20 ml-20">
                <div className="flex w-[45rem] flex-col items-start gap-10">
                    <h2 className="self-stretch dark:text-white text-[#404040] font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                    <p className="w-[27.8125rem] text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                    <div className="flex items-start gap-2">
                        <ButtonPrimary width="w-[8.875rem]" />
                        <ButtonTertiary width="w-[8.875rem]" />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-8 absolute right-40 top-[-182px]">
                    <div className="w-[25rem] h-[25rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                    <div className="w-[25rem] h-[25rem] rounded-[2.5rem] bg-white"></div>
                    <div className="w-[25rem] h-[25rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                </div>
            </div>
        </div>
    )

}