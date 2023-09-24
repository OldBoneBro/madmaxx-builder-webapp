export default function Field( { width = "w-[15.125rem]", height = "h-auto" } ) {
    
    return (

            <div className={`${width} ${height} rounded-2xl dark:bg-[#141414] bg-[#404040]`}>
                <div className="w-[7.1875rem] h-3 rounded-[1.5625rem] m-6 dark:bg-[#333333] bg-[#E4E6ED]"></div>
            </div>

    )

}