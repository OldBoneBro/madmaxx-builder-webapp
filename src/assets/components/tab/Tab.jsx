import { useState, useCallback } from "react"

export default function Tab() {

    const [isButtonADark, setButtonADark] = useState(true)
    const [isButtonBDark, setButtonBDark] = useState(false)

    const handleClick = useCallback((event) => {

        if (event.currentTarget.className.includes("length:200%")) return

        if ((isButtonADark) && (!isButtonBDark)) {
            setButtonADark(false)
            setButtonBDark(true)
        }
        if ((!isButtonADark) && (isButtonBDark)) {
            setButtonADark(true)
            setButtonBDark(false)
        }

    }, [isButtonADark, isButtonBDark])

    return (
        <div className="flex w-[9.0625rem] p-1 items-start gap-1 bg-[#EEEEEE] rounded-[2rem]">
            <Button handleClick={handleClick} meDark = {isButtonADark} text="Monthly"/>
            <Button handleClick={handleClick} meDark = {isButtonBDark} text="Yearly"/>
        </div>
    )

}

function Button ( { meDark = true,  text = "NO_TEXT", handleClick } ) {

    return <button onClick={handleClick} className={`flex p-3 justify-center items-center gap-2 rounded-[2rem] transition-[background-size] ${meDark ? "bg-[length:200%] " : "bg-[length:0%]"} bg-gradient-to-r from-black from-[0%] via-[#000000] via-[50%] to-[#eeeeee] to-[50%]`}><Text meDark = {meDark} text = {text} /></button>

}

function Text ({ meDark, text }) {

    return <p className={`font-inter text-xs not-italic font-semibold text-center ${meDark ? "text-white" : "text-black"}`}>{text}</p>

}