import Mark from "../components/logo/Mark.jsx"

export default function ContactStyle4 () {

    return (
        
        <div className="flex w-[90rem] p-20 flex-col items-center gap-[3.5rem]">
            <Mark />
            <div className="flex flex-col items-center gap-4">
                <p className="font-inter text-2xl not-italic font-semibold tracking-[-0.03rem] w-[33.75rem] text-[#757575] text-center">The night is dark and full of terrors.</p>
                <h2 className="font-inter text-[2.25rem]/[2.75rem] not-italic font-semibold tracking-[-0.1125rem] w-[51rem] dark:text-white text-[#404040] text-center">Build your landings in minutes</h2>
                
            </div>
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
            </div>
        </div>

    )

}