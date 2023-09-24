import Logo from "../components/logo/Logo.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonSecondary from "../components/buttons/ButtonSecondary.jsx"

export default function Style05() {

    return(

        <div className="flex w-[90rem] h-[6.25rem] justify-between items-center px-20 py-[1.38rem]">
            <ButtonSecondary width="w-[8.875rem]" />
            <Logo />
            <ButtonPrimary width="w-[8.875rem]" />
        </div>

    )

}