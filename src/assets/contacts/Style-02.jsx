import Field from "../components/field/Field.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function ContactStyle02 () {

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col w-[90rem] p-20 items-center gap-10">
                <h2 className="font-inter font-semibold text-[3.25rem]/[4rem] not-italic tracking-[-0.1625rem] dark:text-white text-[#404040] text-center w-[51rem]">Build your landings in minutes</h2>
                <p className="font-inter text-lg not-italic font-medium tracking-[-0.0225rem] text-center w-[33.75rem] text-[#757575]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                <div className="flex flex-col items-start gap-4">
                    <Field width="w-full" />
                    <Field width="w-full" />
                    <Field width="w-[35rem]" height="h-[9.5rem]" />
                </div>
                <ButtonPrimary width="w-[8.875rem]" />    
            </div>
        </div>
        
    )

}