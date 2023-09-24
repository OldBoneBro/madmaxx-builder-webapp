export default function ButtonPrimary ({ width = "" }) {
    
    return (
        <button className = {`flex ${width} py-4 px-5 justify-center items-center gap-2 rounded-2xl bg-gradient-135  from-[#00EA87] to-[#78CBFF] hover:from-[#4510ca] hover:to-[#4510ca]`} >
            <p className = "select-none font-inter text-white text-base not-italic font-semibold tracking-[-0.02rem]">Button</p>
        </button>
    )

}

