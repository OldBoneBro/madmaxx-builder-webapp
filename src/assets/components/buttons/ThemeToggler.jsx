import { gsap } from "gsap"
import { useLayoutEffect, useRef, useState } from "react"

export default function ThemeToggler() {

    const toggler = useRef(null)
    const pill = useRef(null)
    const animation = useRef(null)
    const [theme, setTheme] = useState('light')

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            animation.current.progress(0).kill()
            animation.current = gsap.timeline({ paused: true })
                .to(toggler.current, {
                    duration: 0.5,
                    backgroundColor: "#000",
                    ease: "power4.inOut"
                }, 0)
                .to(pill.current, {
                    duration: 0.5,
                    backgroundColor: "#fff",
                    y: 0,
                    ease: "power4.inOut"
                }, 0)
                .to(toggler.current, {
                    duration: 0.25,
                    backgroundColor: "#fff",
                    ease: "power4.inOut"
                }, 0.25)
                .to(pill.current, {
                    duration: 0.25,
                    backgroundColor: "#000",
                    y: 24, 
                    ease: "power4.inOut"
                }, 0.25)
                .reverse()
        })

        return () => ctx.revert()

    }, [])

    const handleClick = () => {

        animation.current.reversed(!animation.current.reversed())
    }

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="flex justify-center">
                <button className="flex w-8 h-16 outline outline-2 outline-black bg-black justify-center p-1 rounded-lg" onClick={handleClick} ref={toggler}>
                    <div className="w-8 h-8 bg-white rounded-lg transition-all" ref={pill}></div>
                </button>
            </div>
        </div>
    )
}