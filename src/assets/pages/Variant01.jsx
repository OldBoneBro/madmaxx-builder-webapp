import Navigation from "../navigation/Navigation.jsx"
import Hero from "../heroes/Hero.jsx"
import CallToAction from "../call-to-action/CallToAction.jsx"
import Showcase from "../showcases/Showcase.jsx"
import Team from "../team/Team.jsx"
import Content from "../contents/Content.jsx"
import Feature from "../features/Feature.jsx"
import Form from "../forms/Form.jsx"
import Testimonial from "../testimonials/Testimonial.jsx"
import PricingTable from "../pricing-tables/PricingTables.jsx"
import Contact from "../contacts/Contact.jsx"
import Footer from "../footers/Footer.jsx"
import { useState } from "react"
import { getRandomNumber } from "../../utils/getRandomIntNumber.js"

const randomize = () => {
        
    //const getRandomNumber = (max, min = 1) => Math.trunc(((Math.random() * (max - min + 1)) + 1))
    const arrayOfRandNumbers = [getRandomNumber(11), getRandomNumber(10), getRandomNumber(5), getRandomNumber(3),
                                getRandomNumber(3), getRandomNumber(6), getRandomNumber(5), getRandomNumber(3),
                                getRandomNumber(4), getRandomNumber(4), getRandomNumber(4), getRandomNumber(17)]
    return arrayOfRandNumbers

}

export default function Variant01() {

    const [randomSet, setRandomSet] = useState(() => randomize())

    function handleClicking(){ 
        console.log('click')
        console.log(randomize())
        setRandomSet(randomize())
    } 
    

    return(
        <div className="flex items-center flex-col ">
            <button className="fixed bottom-4 right-4 w-24 h-10 dark:text-[#F2EDEB] text-black font-inter text-base not-italic font-semibold outline-4 out-[#F2EDEB] outline hover:opacity-75 animate-bounce z-[9999]" onClick={handleClicking}>randomize</button>
            <Hero style={randomSet[1]} /> 
            <Content style={randomSet[5]} />
            <Showcase style={randomSet[3]} />
            <Feature style={randomSet[6]} />
            <Testimonial style={randomSet[8]} />
            <CallToAction style={randomSet[2]} />
            <Team style={randomSet[4]}/>
            <PricingTable style={randomSet[9]} />
            <Contact style={randomSet[10]} />
            <Footer style={randomSet[11]} />
        </div>
    )

}