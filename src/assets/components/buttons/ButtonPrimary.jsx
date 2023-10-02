export default function ButtonPrimary ({ width = "", zIndex = "" }) {
    
    return (
        <button className = {`${zIndex} flex ${width} py-4 px-5 justify-center items-center gap-2 rounded-2xl bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 bg-gradient-135 from-[#00EA87] via-[#78CBFF] to-[#4510ca]`} >
            <p className = "select-none font-inter text-white text-base not-italic font-semibold tracking-[-0.02rem]">Button</p>
        </button>
    )

}

