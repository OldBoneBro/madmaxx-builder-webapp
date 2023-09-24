import ContentStyle01 from "./Style-01"
import ContentStyle02 from "./Style-02"
import ContentStyle03 from "./Style-03"
import ContentStyle04 from "./Style-04"
import ContentStyle05 from "./Style-05"
import ContentStyle06 from "./Style-06"

export default function Content({ style = 1 }) {

    switch(style) {
        case 2:
            return <ContentStyle02 />
        case 3:
            return <ContentStyle03 />
        case 4:
            return <ContentStyle04 />
        case 5:
            return <ContentStyle05 />
        case 6:
            return <ContentStyle06 />
        default:
            return <ContentStyle01 />
    }
    
}