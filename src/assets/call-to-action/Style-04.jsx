import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonSecondary from "../components/buttons/ButtonSecondary.jsx"

export default function CallToActionStyle04 () {

    return (

        <div className="flex w-[90rem] py-20 px-[10.3125rem] justify-between items-start">
            <h2 className="w-[59.25rem] shrink-0 dark:text-white text-[#404040] font-inter text-[2.25rem]/[2.75rem] not-italic font-semibold tracking-[-0.1125rem]">Build your landings in minutes</h2>
            <div className="flex items-start gap-4">
                <ButtonPrimary width="w-[8.875rem]" />
                <ButtonSecondary width="w-[8.875rem]" />  
            </div>
        </div>

    )

}