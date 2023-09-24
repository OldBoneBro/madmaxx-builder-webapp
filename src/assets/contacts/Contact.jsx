import ContactStyle01 from "./Style-01.jsx"
import ContactStyle02 from "./Style-02.jsx"
import ContactStyle03 from "./Style-03.jsx"
import ContactStyle04 from "./Style-04.jsx"

export default function Contact({ style = 1 }) {

    switch(style) {
        case 1:
            return <ContactStyle01 />
        case 2:
            return <ContactStyle02 />
        case 3:
            return <ContactStyle03 />
        default:
            return <ContactStyle04 />
    }

}