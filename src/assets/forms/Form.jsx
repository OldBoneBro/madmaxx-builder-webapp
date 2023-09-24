import FormStyle01 from "./Style-01.jsx"
import FormStyle02 from "./Style-02.jsx"
import FormStyle03 from "./Style-03.jsx"

export default function Form({ style = 1 }) {

    switch(style) {
        case 2:
            return <FormStyle02 />
        case 3:
            return <FormStyle03 />
        default:
            return <FormStyle01 />
    }

}