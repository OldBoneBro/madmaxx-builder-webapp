import Logo from "../components/logo/Logo.jsx"

export default function Style10() {

    return(

        <div className="flex w-[90rem] h-[6.25rem] items-center px-20 py-[1.38rem]">
            <div className="flex items-start gap-8">
                <Logo />
                <ul className="flex items-start gap-1">
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                </ul>
            </div>
        </div>

    )

}