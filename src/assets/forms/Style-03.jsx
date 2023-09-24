import Logo from "../components/logo/Logo.jsx"
import Field from "../components/field/Field.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function FormStyle03 () {

    return (

        <div className="flex justify-center items-center">
            <div className="flex flex-col w-[90rem] p-20 items-center gap-10">
                <div className="flex p-[4rem] items-start gap-[4.5rem] rounded-[2rem] bg-[#333333]">
                    <div className="flex w-[28.125rem] flex-col items-center gap-10">
                        <Logo  origialColorScheme={false} />
                        <h2 className="font-inter text-[2.75rem]/[3.25rem] not-italic font-semibold tracking-[-0.1375rem] self-stretch text-center text-white">Build your landings</h2>
                        <div className="flex flex-col items-start gap-4 self-stretch">
                            <Field width="w-full" />
                            <Field width="w-full" />
                            <Field width="w-full" height="h-[9.5rem]" />
                        </div>
                        <ButtonPrimary width="w-full" />
                    </div>
                </div>
            </div>
        </div>

    )

}