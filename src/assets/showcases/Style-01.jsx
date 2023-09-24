import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function ShowcaseStyle01 () {

    return (

        <div className="flex w-[90rem] p-20 flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-10">
                <h2 className="w-[51rem] dark:text-white text-[#404040] text-center font-inter text-[3.25rem]/[4rem] not-italic font-semibold tracking-[-0.1625rem]">Build your landings in minutes</h2>
                <p className="font-inter text-lg not-italic font-medium tracking-[-0.0225rem] text-center w-[33.75rem] text-[#757575]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
            </div>
            <div className="flex items-start gap-[1.875rem]">
                <div className="flex flex-col items-start gap-[1.875rem]">
                    <div className="w-[21.875rem] h-[13.75rem] rounded-[2rem] dark:bg-white bg-[#404040]"></div>
                    <div className="w-[21.875rem] h-[35rem] rounded-[2rem] dark:bg-white bg-[#404040]"></div>
                </div>
                    <div className="w-[21.875rem] h-[50.625rem] rounded-[2rem] dark:bg-white bg-[#404040]"></div>
                <div className="flex flex-col items-start gap-[1.875rem]">
                    <div className="w-[21.875rem] h-[20rem] rounded-[2rem] dark:bg-white bg-[#404040]"></div>
                    <div className="w-[21.875rem] h-[13.125rem] rounded-[2rem] dark:bg-white bg-[#404040]"></div>
                    <div className="w-[21.875rem] h-[13.75rem] rounded-[2rem] dark:bg-white bg-[#404040]"></div>
                </div>
            </div>
            <ButtonPrimary width="w-[8.875rem]" /> 
        </div>

    )

}