import Logo from "../components/logo/Logo.jsx"

export default function FooterStyle01 () {

    return (

        <div className="flex w-[90rem] p-[5rem_5rem_2.5rem_5rem] flex-col items-center gap-10">
            <div className="flex justify-between items-start self-stretch" >
                <ul className="flex items-start gap-1">
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                </ul>
                <Logo />
                <ul className="flex items-start gap-1">
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="dark:text-white text-[#262626] font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                </ul>
            </div>
            <div className="flex h-[0.125rem] justify-center items-center self-stretch bg-[#333333]"></div>
            <p className="text-[#757575] text-center font-inter text-lg not-italic font-medium tracking-[-.0225rem]">©2023 madeofzero. All rights reserved.</p>
        </div>

    )

}