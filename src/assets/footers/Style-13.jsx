import Logo from "../components/logo/Logo.jsx"
import Newsletter from "../components/newsletter/Newsletter.jsx"

export default function FooterStyle13 () {

    return (

        <div className="flex w-[90rem] p-20 flex-col items-start gap-10">
            <div className="flex justify-between items-start self-stretch">
                <Logo />
                <Newsletter />
            </div>
            <div className="flex h-[0.125rem] justify-center items-center self-stretch bg-[#333333]"></div>
            <div className="flex justify-between items-center self-stretch">
                <ul className="flex items-start gap-1">
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                </ul>
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                    <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                    <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                </div>
            </div>
        </div>
        
    )

}