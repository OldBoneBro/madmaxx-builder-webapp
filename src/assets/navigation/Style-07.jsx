import Logo from "../components/logo/Logo.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import Menu from "../components/menu/Menu.jsx"

export default function Style07() {

    return (

        <div className="flex w-[90rem] h-[6.25rem] justify-between items-center px-20 py-[1.38rem]">
            <Menu />
            <Logo />
            <ButtonPrimary width="w-[8.875rem]" />
        </div>

    )

}
