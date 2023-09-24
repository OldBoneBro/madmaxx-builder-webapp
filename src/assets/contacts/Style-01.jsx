import Field from "../components/field/Field.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function ContactStyle01 () {

    return (
        <div className="inline-flex items-center">
            <div className="w-[45rem] self-stretch bg-white"></div>
            <div className="flex p-[5rem] flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-6 self-stretch">
                    <p className="font-inter text-lg not-italic font-bold tracking-[0.25rem] uppercase self-stretch text-[#757575]">Landing Page Builder</p>
                    <h2 className="font-inter font-semibold text-[3.25rem]/[4rem] not-italic tracking-[-0.1625rem] dark:text-white text-[#404040] self-stretch">Build your landings in minutes</h2>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <Field width="w-full" />
                    <Field width="w-full" />
                    <Field width="w-full" height="h-[9.5rem]" />
                </div>
                <ButtonPrimary width="w-[8.875rem]" />    
            </div>
        </div>


    )

}