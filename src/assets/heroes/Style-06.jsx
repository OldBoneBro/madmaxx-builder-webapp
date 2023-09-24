import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"

export default function Style06() {

    return(

        <div className="flex flex-col w-[90rem] items-start">
            <Navigatinon />
            <div className="flex w-full px-20 py-24 flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-10 self-stretch">
                    <h2 className="self-stretch dark:text-white text-[#404040] font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                    <p className="w-[33.75rem] text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                </div>
                <div className="flex items-start gap-2">
                    <ButtonPrimary width="w-[8.875rem]" />
                    <ButtonTertiary width="w-[8.875rem]" />  
                </div>
                <div className="w-[80rem] h-[44.9375rem] rounded-[2.5rem] bg-white"></div>
            </div>
        </div>

    )

}
