import PicingTableStyle01 from "./Style-01.jsx"
import PicingTableStyle02 from "./Style-02.jsx"
import PicingTableStyle03 from "./Style-03.jsx"
import PicingTableStyle04 from "./Style-04.jsx"

export default function PricingTable( { style = 1} ) {

    switch(style) {
        case 2:
            return <PicingTableStyle02 />
        case 3:
            return <PicingTableStyle03 />
        case 4:
            return <PicingTableStyle04 />
        default:
            return <PicingTableStyle01 />   
    }

}