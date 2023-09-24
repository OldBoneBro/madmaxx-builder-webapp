import { useMemo } from "react"

export const PlaySvg = ( { width = "35", height = "35", defaultColorScheme = true } ) => {

    const current_style = useMemo(() => defaultColorScheme ? 'dark:fill-white fill-[#404040]' : 'fill-white', [defaultColorScheme])

    return (
        <svg  width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={current_style} fillRule="evenodd" clipRule="evenodd" d="M14.6889 8.26343C12.3325 8.26343 10.4222 10.1737 10.4222 12.5301V22.5366C10.4222 23.2921 10.6228 24.034 11.0035 24.6865C12.1908 26.7219 14.8033 27.4094 16.8388 26.2221L25.4158 21.2188C26.0515 20.848 26.5806 20.319 26.9514 19.6832C28.1387 17.6478 27.4512 15.0352 25.4158 13.8479L16.8388 8.84464C16.1862 8.464 15.4443 8.26343 14.6889 8.26343Z" />
        </svg>
    )

}