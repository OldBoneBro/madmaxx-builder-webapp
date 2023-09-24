import { PlaySvg }from "../imgs/svgs/components/Play.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function FeatureStyle02 () {

    return (

        <div className="flex w-[90rem] p-20 flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-10">
                <p className="w-[51rem] text-center dark:text-white text-[#404040] font-inter text-[3.25rem]/[4rem] not-italic font-semibold tracking-[-0.1625rem]">Build your landings in minutes</p>
                <p className="w-[33.75rem] text-center text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
            </div>
            <div className="flex w-[33.75rem] h-[19rem] justify-center items-center rounded-[2.5rem] bg-white">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-135  from-[#00EA87] to-[#78CBFF] hover:from-[#4510ca] hover:to-[#4510ca]">
                    <PlaySvg defaultColorScheme={false}  />
                </div>
            </div>
            <div className="flex flex-col items-start gap-6">
                <p className="w-[33.75rem] dark:text-white text-[#404040] text-center font-inter text-2xl not-italic font-semibold tracking-[-0.03rem]">Build your landings in minutes</p>
                <p className="w-[33.75rem] text-[#757575] text-center font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
            </div>
            <ButtonPrimary width="w-[8.875rem]"/>
        </div>

    )

}