import Tab from "../components/tab/Tab.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"

export default function PicingTableStyle02() {

    return (

        <div className="flex w-[90rem] px-[10.1875rem] py-20 flex-col items-center gap-20">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="w-[45.625rem] dark:text-white text-[#404040] text-center font-inter text-[2.75rem]/[3.25rem] not-italic font-semibold tracking-[-0.1375rem]">Build your landing pages in minutes</h2>
                    <p className="w-[33.75rem] text-[#757575] text-center text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                </div>
                <Tab />
            </div>
            <div className="flex items-start gap-8">
                <div className="flex flex-col justify-between p-10 w-[21.875rem] h-[28.25rem] rounded-[2.5rem] bg-[#1F1F1F]">
                    <p className="w-[16.875rem] text-white font-inter text-center text-2xl not-italic font-bold tracking-[-0.03rem]">Builder</p>
                    <div className="flex w-[16.875rem] justify-center items-center gap-2">
                        <p className="text-white font-inter text-[2.75rem]/[3.25rem] not-italic font-bold tracking-[-0.1375rem]">$0.00</p>
                        <p className="text-[#757575] font-inter text-[1.125rem]/[1.5rem] not-italic font-bold tracking-[-0.0255rem]">/ Month</p>
                    </div>
                    <div className="flex w-[16.875rem] flex-col items-start gap-6">
                        <p className="self-stretch text-white text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 01</p>    
                        <p className="self-stretch text-white text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 02</p>    
                        <p className="self-stretch text-white text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 03</p>    
                    </div>
                    <ButtonPrimary />
                </div>
                <div className="flex flex-col justify-between p-10 w-[21.875rem] h-[28.25rem] rounded-[2.5rem] bg-white">
                    <p className="w-[16.875rem] text-black font-inter text-center text-2xl not-italic font-bold tracking-[-0.03rem]">Builder</p>
                    <div className="flex w-[16.875rem] justify-center items-center gap-2">
                        <p className="text-black font-inter text-[2.75rem]/[3.25rem] not-italic font-bold tracking-[-0.1375rem]">$0.00</p>
                        <p className="text-[#545454] font-inter text-[1.125rem]/[1.5rem] not-italic font-bold tracking-[-0.0255rem]">/ Month</p>
                    </div>
                    <div className="flex w-[16.875rem] flex-col items-start gap-6">
                        <p className="self-stretch text-black text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 01</p>    
                        <p className="self-stretch text-black text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 02</p>    
                        <p className="self-stretch text-black text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 03</p>    
                    </div>
                    <ButtonPrimary />
                </div>
                <div className="flex flex-col justify-between p-10 w-[21.875rem] h-[28.25rem] rounded-[2.5rem] bg-[#1F1F1F]">
                    <p className="w-[16.875rem] text-white font-inter text-center text-2xl not-italic font-bold tracking-[-0.03rem]">Builder</p>
                    <div className="flex w-[16.875rem] justify-center items-center gap-2">
                        <p className="text-white font-inter text-[2.75rem]/[3.25rem] not-italic font-bold tracking-[-0.1375rem]">$0.00</p>
                        <p className="text-[#757575] font-inter text-[1.125rem]/[1.5rem] not-italic font-bold tracking-[-0.0255rem]">/ Month</p>
                    </div>
                    <div className="flex w-[16.875rem] flex-col items-start gap-6">
                        <p className="self-stretch text-white text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 01</p>    
                        <p className="self-stretch text-white text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 02</p>    
                        <p className="self-stretch text-white text-center font-inter text-base not-italic font-extrabold tracking-[-0.02rem]">Feature 03</p>    
                    </div>
                    <ButtonPrimary />
                </div>
            </div>
            
        </div>

    )

}