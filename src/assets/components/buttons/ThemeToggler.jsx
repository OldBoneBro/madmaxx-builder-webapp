import {  useState } from "react"

export default function ThemeToggler() {

    const [darkTheme, setDarkTheme] = useState(false)
    const [togglerStyle, setTogglerStyle] = useState({})


    const handleClick = () => {

        if (!darkTheme) {
            setTogglerStyle({
                shell: {
                    backgroundColor: '#fff',
                },
                pill: {
                    backgroundColor: '#000',
                    transform: 'translateY(24px)'
                }
            })
            document.documentElement.classList.toggle('dark')
            setDarkTheme(!darkTheme)
        } else {
            setTogglerStyle({
                shell: {
                    backgroundColor: '#000',
                },
                pill: {
                    backgroundColor: '#fff',
                    transform: 'translateY(0px)'
                }
            })
            document.documentElement.classList.toggle('dark')
            setDarkTheme(!darkTheme)
        }

    }

    return (
        <div className="fixed left-8 top-[90%] z-[9999]">
            <button className="flex w-8 h-16 outline outline-2 outline-black bg-black justify-center p-1 rounded-lg transition-all " onClick={handleClick} style={togglerStyle.shell}>
                <div className="w-8 h-8 bg-white rounded-lg transition-all" style={togglerStyle.pill}></div>
            </button>
        </div>
    )
}