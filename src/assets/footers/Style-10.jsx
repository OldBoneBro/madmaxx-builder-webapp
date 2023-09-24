import Logo from "../components/logo/Logo.jsx"

export default function FooterStyle10 () { 
    return (

        <div className="flex w-[90rem] h-[13.5rem] px-14 py-20 justify-center items-center shrink-0">
            <div className="flex w-[80rem] p-6 justify-between items-center shrink-0 rounded-3xl bg-[#141414]">
                <Logo origialColorScheme={false} />
                <p className="text-center text-[#757575] font-inter text-lg not-italic font-medium tracking-[-.0225rem]">©2023 madeofzero. All rights reserved.</p>
                <ul className="flex items-start gap-1">
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="text-white font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="text-white font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                    <ol className="flex px-5 py-4 justify-center items-center gap-2 rounded-2xl"><a href="/" className="text-white font-inter text-base not-italic font-semibold tracking-[-.02rem]">Link</a></ol>
                </ul>
            </div>
        </div>

    )
}