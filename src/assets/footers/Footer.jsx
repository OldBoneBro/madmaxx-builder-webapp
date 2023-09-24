import FooterStyle01 from "./Style-01.jsx"
import FooterStyle02 from "./Style-02.jsx"
import FooterStyle03 from "./Style-03.jsx"
import FooterStyle04 from "./Style-04.jsx"
import FooterStyle05 from "./Style-05.jsx"
import FooterStyle06 from "./Style-06.jsx"
import FooterStyle07 from "./Style-07.jsx"
import FooterStyle08 from "./Style-08.jsx"
import FooterStyle09 from "./Style-09.jsx"
import FooterStyle10 from "./Style-10.jsx"
import FooterStyle11 from "./Style-11.jsx"
import FooterStyle12 from "./Style-12.jsx"
import FooterStyle13 from "./Style-13.jsx"
import FooterStyle14 from "./Style-14.jsx"
import FooterStyle15 from "./Style-15.jsx"
import FooterStyle16 from "./Style-16.jsx"
import FooterStyle17 from "./Style-17.jsx"

export default function Footer({ style = 1 }) {

    switch(style){
        case 2:
            return <FooterStyle02 />
        case 3:
            return <FooterStyle03 />
        case 4:
            return <FooterStyle04 />
        case 5:
            return <FooterStyle05 />
        case 6:
            return <FooterStyle06 />
        case 7:
            return <FooterStyle07 />
        case 8:
            return <FooterStyle08 />
        case 9:
            return <FooterStyle09 />
        case 10:
            return <FooterStyle10 />
        case 11:
            return <FooterStyle11 />
        case 12:
            return <FooterStyle12 />
        case 13:
            return <FooterStyle13 />
        case 14:
            return <FooterStyle14 />
        case 15:
            return <FooterStyle15 />
        case 16:
            return <FooterStyle16 />
        case 17:
            return <FooterStyle17 />
        default:
            return <FooterStyle01 />

    }

}