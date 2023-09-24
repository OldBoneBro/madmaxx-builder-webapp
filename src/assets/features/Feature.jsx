import FeatureStyle01 from "./Style-01.jsx"
import FeatureStyle02 from "./Style-02.jsx"
import FeatureStyle03 from "./Style-03.jsx"
import FeatureStyle04 from "./Style-04.jsx"
import FeatureStyle05 from "./Style-05.jsx"

export default function Feature({ style = 1 }) {

    switch(style) {
        case 2:
            return <FeatureStyle02 />
        case 3:
            return <FeatureStyle03 />
        case 4:
            return <FeatureStyle04 />
        case 5:
            return <FeatureStyle05 />
        default:
            return <FeatureStyle01 />
    }
    
}