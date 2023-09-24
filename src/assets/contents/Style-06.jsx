import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function ContentStyle6 () {

    return (

        <div className="flex w-[90rem] p-20 items-center gap-[7.5rem]">
            <div className="w-[33.75rem] h-[33.75rem] shrink-0 rounded-[2rem] bg-white"></div>
            <div className="flex flex-col items-start gap-16 flex-[1_0_0]">
                <div className="flex flex-col items-start gap-10">
                    <div className="flex flex-col items-start gap-6">
                        <p className="w-[38.75rem] text-[#757575] font-inter text-lg not-italic font-bold tracking-[.25rem] uppercase">Landing Page Builder</p>
                        <h2 className="w-[38.75rem] dark:text-white text-[#404040] font-inter text-[3.25rem]/[4rem] not-italic font-semibold tracking-[-0.1625rem]">Build your landings in minutes</h2>
                    </div>
                    <p className="w-[38.75rem] font-inter text-lg not-italic font-medium tracking-[-0.0225rem] text-[#757575]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                </div>
                <ButtonPrimary width="w-[8.875rem]" /> 
            </div>
        </div>

    )

}