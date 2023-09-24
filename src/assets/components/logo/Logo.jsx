import Mark from "./Mark.jsx"
import zero from "../../imgs/svgs/logo/zero.svg"

export default function Logo({ origialColorScheme = true }) {

    return(
        <div className="flex items-center gap-2">
            <Mark origialColorScheme={origialColorScheme} />
            <img className={`w-[5.31344rem] h-[1.59rem] select-none ${origialColorScheme && 'invert dark:invert-0'}`} src={zero} alt="Logo" />
        </div>
    )

}