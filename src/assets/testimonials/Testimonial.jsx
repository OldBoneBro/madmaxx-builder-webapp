import TestimonialStyle01 from './Style-01.jsx'
import TestimonialStyle02 from './Style-02.jsx'
import TestimonialStyle03 from './Style-03.jsx'
import TestimonialStyle04 from './Style-04.jsx'

export default function Testimonial({ style = 1 }) {

    switch(style) {
        case 2:
            return <TestimonialStyle02 />
        case 3:
            return <TestimonialStyle03 />
        case 4:
            return <TestimonialStyle04 />
        default:
            return <TestimonialStyle01 />
    }

}