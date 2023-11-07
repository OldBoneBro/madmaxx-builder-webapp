import { getSvgUrl } from "../../../utils/getSvgUrl";

export default function Menu () {
    
    return (
        <div className="flex w-14 h-14 p-[0.875rem] justify-center items-center dark:bg-[#1F1F1F] bg-[#404040] rounded-2xl">
            <img src={getSvgUrl("../../imgs/svgs/icons/Menu.svg")} alt="" />
        </div>
    )

}