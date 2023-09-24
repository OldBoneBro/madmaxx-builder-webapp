import Field from "../components/field/Field.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function ContactStyle03 () {
    return (
        <div className="flex justify-center items-center">
            <div className="flex w-[90rem] p-20 items-start gap-[7.5rem]">
                <div className="flex flex-col items-start gap-16 flex-[1_0_0]">
                    <h2 className="font-inter font-semibold text-[3.25rem]/[4rem] not-italic tracking-[-0.1625rem] dark:text-white text-[#404040] self-stretch">Build your landings in minutes</h2>
                    <p className="font-inter text-lg not-italic font-medium tracking-[-0.0225rem] self-stretch text-[#757575]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                        <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                        <div className="w-10 h-10 rounded-lg bg-[#545454]"></div>
                    </div>
                </div>
                <div className="flex w-[40rem] p-10 flex-col items-start gap-6 shrink-0 rounded-[2rem] bg-[#1F1F1F]">
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <Field width="w-full" />
                        <Field width="w-full" />
                        <Field width="w-[35rem]" height="h-[9.5rem]" />
                    </div>
                    <ButtonPrimary width="w-[8.875rem]" /> 
                </div>
            </div>
        </div>
        
    )
}