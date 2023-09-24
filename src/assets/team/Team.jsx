import TeamStyle01 from "./Style-01"
import TeamStyle02 from "./Style-02"
import TeamStyle03 from "./Style-03"

export default function Team( { style = 1} ) {

    switch(style) {
        case 2:
            return <TeamStyle02 />
        case 3:
            return <TeamStyle03 />
        default:
            return <TeamStyle01 />
    }

}