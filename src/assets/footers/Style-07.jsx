import Logo from "../components/logo/Logo.jsx"

export default function FooterStyle7 () { 

    return (

        <div className="flex justify-between items-center py-10 px-20 w-[90rem] h-[8.5rem]">
            <p className="text-[#757575] font-inter text-lg not-italic font-medium tracking-[-.0225rem]">©2023 madeofzero. All rights reserved.</p>
            <Logo />
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
            </div>
        </div>

    )

}