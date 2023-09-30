import Logo from "../components/logo/Logo.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
export default function Style01() {

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