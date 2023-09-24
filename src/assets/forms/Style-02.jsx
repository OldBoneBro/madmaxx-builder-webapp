import Newsletter from "../components/newsletter/Newsletter.jsx"

export default function FormStyle02 () {

    return (

        <div className="flex justify-center items-center">
            <div className="flex flex-col w-[90rem] p-20 items-center gap-10">
                <h2 className="w-[51rem] font-inter font-semibold text-[3.25rem]/[4rem] not-italic tracking-[-0.1625rem] dark:text-white text-[#404040] text-center">Build your landings in minutes</h2>
                <p className="w-[33.75rem] font-inter text-lg not-italic tracking-[-0.0225rem] text-center text-[#757575] font-medium">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                <Newsletter/>
            </div>
        </div>

    )

}