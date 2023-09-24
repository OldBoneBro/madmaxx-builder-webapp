export default function ButtonTertiary ({ width = "" }) {
    
    return (
        <button className={`flex ${width} h-14 py-4 px-5 justify-center items-center gap-2 rounded-2xl`}>
            <p className="select-none font-inter dark:text-white text-black text-base not-italic font-semibold tracking-[-.32px]">Button</p>
        </button>
    )

}