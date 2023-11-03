import {  useState } from 'react'

export default function ThemeToggler() {

    const [theme, setTheme] = useState(() => {

        if(!JSON.parse(localStorage.getItem('theme'))?.type) {
   
            let storageTheme = { 
                type: 'light',
                style: {
                    shell: {
                        backgroundColor: '#000',
                    },
                    pill: {
                        backgroundColor: '#fff',
                        transform: 'translateY(0px)'
                    }
                }
            }
        
            localStorage.setItem('theme', JSON.stringify(storageTheme, 2))
            return storageTheme

        }

        (JSON.parse(localStorage.getItem('theme')).type === "dark") ?
            document.documentElement.classList.add('dark') :
            document.documentElement.classList.remove('dark')

        return JSON.parse(localStorage.getItem('theme'))

    })

    const handleClick = () => {

        const storageTheme = JSON.parse(localStorage.getItem('theme'))

        if (storageTheme.type === 'light') {
            storageTheme.type = 'dark'
            storageTheme.style = {
                shell: {
                    backgroundColor: '#fff',
                },
                pill: {
                    backgroundColor: '#000',
                    transform: 'translateY(24px)'
                }
            }
            document.documentElement.classList.add('dark')
        } else {
            storageTheme.type = 'light'
            storageTheme.style = {
                shell: {
                    backgroundColor: '#000',
                },
                pill: {
                    backgroundColor: '#fff',
                    transform: 'translateY(0px)'
                }
            }
            document.documentElement.classList.remove('dark')
        }

        setTheme(storageTheme)
        localStorage.setItem('theme', JSON.stringify(storageTheme, 2))

    }

    return (
        <div className='fixed left-8 top-[90%] z-[9999]'>
            <button className='flex w-8 h-16 outline outline-2 outline-black bg-black justify-center p-1 rounded-lg transition-all ' onClick={handleClick} style={theme.style.shell}>
                <div className='w-8 h-8 bg-white rounded-lg transition-all' style={theme.style.pill}></div>
            </button>
        </div>
    )
}