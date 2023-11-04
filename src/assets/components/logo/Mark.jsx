import blur from "../../imgs/pngs/logo/blur.png";

export default function Mark( { origialColorScheme = true } ) {

    return(
        <div className="flex w-14 h-14 p-2 justify-center items-center rounded-2xl select-none"><img src={blur} alt="Mark" className={origialColorScheme ? `invert dark:invert-0` : ""} /></div>
    )

}