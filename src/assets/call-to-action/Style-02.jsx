import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function CallToActionStyle02 () {

    return (

        <div className="flex flex-col w-[90rem] p-20 items-center gap-10">
            <div className="flex flex-col p-20 items-center gap-10 self-stretch rounded-[2rem] bg-[#141414]">
                <h2 className="w-[51rem] text-white text-center font-inter text-[3.25rem]/[4rem] not-italic font-semibold tracking-[-0.1625rem]">Build your landings in minutes</h2>
                <p className="font-inter text-lg not-italic font-medium tracking-[-0.0225rem] text-center w-[33.75rem] text-[#757575]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                <ButtonPrimary width="w-[8.875rem]" />  
            </div>
        </div>

    )

}