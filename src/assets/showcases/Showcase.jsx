import ShowcaseStyle01 from "./Style-01.jsx"
import ShowcaseStyle02 from "./Style-02.jsx"
import ShowcaseStyle03 from "./Style-03.jsx"

export default function Showcase( { style = 1} ) {

    switch(style) {
        case 2:
            return <ShowcaseStyle02 />
        case 3:
            return <ShowcaseStyle03 />
        default:
            return <ShowcaseStyle01 />
    }

}