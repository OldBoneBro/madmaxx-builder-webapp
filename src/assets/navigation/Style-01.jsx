import Logo from "../components/logo/Logo.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import { useEffect } from "react"

export default function Style01() {

    useEffect(() =>{
        const list = document.getElementById('style-1')
        const links = list.querySelectorAll('a')
        const linkData = []
        for(let i = 0; i < links.length; i++) {
            linkData.push({
                'linkId' : 'link' + (i + 1),
                'spans' : links[i].querySelectorAll('span')
            }) 
        }
        console.log(linkData[0].spans[3] ,linkData[0].spans[3].offsetWidth)
    }, [])

    return(

        <div className="flex w-[90rem] h-[6.25rem] justify-between items-center px-20 py-[1.38rem]">
            <Logo />
            <ul id="style-1" className="flex items-start gap-1 ">
                <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]"><span>L</span><span>i</span><span>n</span><span>k</span></a></ol>
                <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]"><span>L</span><span>i</span><span>n</span><span>k</span></a></ol>
                <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]"><span>L</span><span>i</span><span>n</span><span>k</span></a></ol>
                <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]"><span>L</span><span>i</span><span>n</span><span>k</span></a></ol>
                <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]"><span>L</span><span>i</span><span>n</span><span>k</span></a></ol>
            </ul>
            <ButtonPrimary width="w-[8.875rem]" />
        </div>

    )

}