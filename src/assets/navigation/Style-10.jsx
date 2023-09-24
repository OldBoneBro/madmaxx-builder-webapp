import Logo from "../components/logo/Logo.jsx"
import Menu from "../components/menu/Menu.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function Style10() {

    return(

        <div className="flex w-[90rem] h-[6.25rem] justify-between items-center px-20 py-[1.38rem]">
            <div className="flex items-start gap-8">
                <Menu />
                <Logo />
            </div>
            <ButtonPrimary width="w-[8.875rem]" />
        </div>

    )

}