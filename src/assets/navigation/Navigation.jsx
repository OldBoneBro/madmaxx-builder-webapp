import Style01 from "./Style-01"
import Style02 from "./Style-02"
import Style03 from "./Style-03"
import Style04 from "./Style-04"
import Style05 from "./Style-05"
import Style06 from "./Style-06"
import Style07 from "./Style-07"
import Style08 from "./Style-08"
import Style09 from "./Style-09"
import Style10 from "./Style-10"
import Style11 from "./Style-11"

export default function Navigatinon( { style = 1} ) {

    switch(style) {
        case 2:
            return <Style02 />
        case 3:
            return <Style03 />
        case 4:
            return <Style04 />
        case 5:
            return <Style05 />
        case 6:
            return <Style06 />
        case 7:
            return <Style07 />
        case 8:
            return <Style08 />
        case 9:
            return <Style09 />
        case 10:
            return <Style10 />
        case 11:
            return <Style11 />
        default:
            return (<Style01 />)
    }
    
}