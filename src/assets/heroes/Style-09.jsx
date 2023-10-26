import Navigatinon from "../navigation/Navigation.jsx"
import { PlaySvg }  from "../imgs/svgs/components/Play.jsx"

export default function Style09() {
    //W: 74.969 H: 74.94
    return(

        <div className="flex flex-col w-[90rem] items-start">
            <Navigatinon />
            <div className="flex w-full px-[19.5rem] py-24 flex-col items-center gap-20">
                <div className="flex flex-col items-center gap-10 self-stretch">
                    <h2 className="self-stretch dark:text-white text-[#404040] text-center font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                    <p className="w-[33.75rem] text-[#757575] text-center font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                </div>
                <div className=" relative flex w-[57.6875rem] h-[25.6875rem] items-center">
                    <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F] hover:bg-white hover:scale-x-[74.969] "></div>
                    <div className="absolute left-24 flex w-[45.6875rem] h-[25.6875rem] justify-center items-center rounded-[2.5rem] bg-white">
                        <div className="flex justify-center items-center w-[6.5rem] h-[6.5rem] rounded-full bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 bg-gradient-135 from-[#00EA87] via-[#78CBFF] to-[#4510ca]">
                            <PlaySvg width="44.373" height="44.373" defaultColorScheme={false}  />
                        </div>
                    </div>
                    {/* <div className="w-[34.25rem] h-[19.25rem] rounded-[2.5rem] bg-[#1F1F1F]"></div> */}
                </div>
            </div>
        </div>

    )

}