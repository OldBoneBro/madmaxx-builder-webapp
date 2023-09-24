import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function CallToActionStyle03 () {

    return (

        <div className="flex flex-col w-[90rem] p-20 items-center gap-10">
            <div className="w-20 h-20 rounded-3xl bg-[#545454]"></div>
            <h2 className="w-[51rem] dark:text-white text-[#404040] text-center font-inter text-[3.25rem]/[4rem] not-italic font-semibold tracking-[-0.1625rem]">Build your landings in minutes</h2>
            <p className="font-inter text-lg not-italic font-medium tracking-[-0.0225rem] text-center w-[33.75rem] text-[#757575]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
            <ButtonPrimary width="w-[8.875rem]" />  
        </div>

    )

}