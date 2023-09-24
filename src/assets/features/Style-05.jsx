import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function FeatureStyle05 () {

    return(

        <div className="flex w-[90rem] p-20 flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-10">
                <p className="w-[51rem] text-center dark:text-white text-[#404040] font-inter text-[3.25rem]/[4rem] not-italic font-semibold tracking-[-0.1625rem]">Build your landings in minutes</p>
                <p className="w-[33.75rem] text-center text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
            </div>
            <ButtonPrimary width="w-[8.875rem]" />
            <div className="w-[69.375rem] h-[30rem] rounded-[2rem] bg-white"></div>
        </div>

    )

}
