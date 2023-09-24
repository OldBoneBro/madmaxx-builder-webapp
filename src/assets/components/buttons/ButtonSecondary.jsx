export default function ButtonSecondary ({ width = "" }) {
    
    return (
        <button className={`flex ${width} h-14 py-4 px-5 justify-center items-center gap-2 rounded-2xl border-4 border-[#6B6B6B] dark:hover:border-white hover:border-black`}>
            <p className="font-inter dark:text-white text-black text-base not-italic font-semibold tracking-[-.32px] select-none">Button</p>
        </button>
    )

}