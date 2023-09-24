import Logo from "../components/logo/Logo.jsx"
import Field from "../components/field/Field.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function FormStyle01 () {

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col w-[90rem] p-20 items-center gap-10">
            <Logo />
            <div className="flex w-full p-20 justify-between items-start self-stretch bg-[#1F1F1F] rounded-[2rem]">
                <div className="flex w-[28.125rem] flex-col items-start gap-[2.5rem]">
                    <h2 className="font-inter font-semibold text-[3.25rem]/[4rem] not-italic tracking-[-0.1625rem] text-white self-stretch">Build your landings</h2>
                    <div className="flex flex-col items-start gap-4 self-stretch">
                        <Field width="w-full" />
                        <Field width="w-full" />
                        <Field width="w-full" height="h-[9.5rem]" />
                    </div>
                    <ButtonPrimary width="w-full" />
                </div>
                <div className="w-[34.375rem] h-[34.375rem] rounded-[2rem] bg-white"></div>
            </div>
        </div>
        </div>
        

    )

}