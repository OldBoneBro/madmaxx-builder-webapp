import CallToActionStyle01 from "./Style-01.jsx"
import CallToActionStyle02 from "./Style-02.jsx"
import CallToActionStyle03 from "./Style-03.jsx"
import CallToActionStyle04 from "./Style-04.jsx"
import CallToActionStyle05 from "./Style-05.jsx"

export default function CallToAction({ style = 1 }) {

    switch(style) {
        case 2:
            return <CallToActionStyle02 />
        case 3:
            return <CallToActionStyle03 />
        case 4:
            return <CallToActionStyle04 />
        case 5:
            return <CallToActionStyle05 />
        default:
            return <CallToActionStyle01 />
    }

}