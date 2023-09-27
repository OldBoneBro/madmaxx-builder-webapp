import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { useEffect, useRef } from "react"
import { getRandomIntNumber } from "../../utils/getRandom.js"
import { Engine, Render, Bounds ,Bodies, Body, Mouse, MouseConstraint, Composite, Runner, Events, Collision, Query, Constraint } from "matter-js"
import { Particles, physifyRightSection } from "../physics/physifyRightSection.js"

export default function Style10() {

    const container = useRef()
    const engine  = useRef(Engine.create()) //{gravity: {y: 0}}
    
    useEffect(() => {

        const containerWidth = container.current.clientWidth
        const containerHeight = container.current.clientHeight
        
        const render = Render.create({
                element: container.current,
                engine: engine.current,
                options: {
                    width: (containerWidth - 544),
                    height: containerHeight,
                    wireframes: false,
                    background: 'transparent',
                    showVelocity: true,
                }
        })

        const altRight = physifyRightSection()
        const gimmeParticles = async (type) => {

            let createParticles
            if (type === 'rectangles') {
                createParticles = new Promise(function(res) {
                    setTimeout(() => res(new Particles(type, 
                    {x: altRight.parts[7].position.x, y: altRight.parts[7].bounds.min.y}, 
                    40, 
                    40, 
                    null, 
                    10, 
                    300).populate()), 0)})
            }

            return await createParticles

        }

        const testBody = Bodies.circle(204, altRight.parts[7].bounds.min.y, 20,
            {
            isStatic: true,
            mass: 10,
            restitution: 0.9,
            friction: 0.005,
            })

        const circles = new Particles('circles', 
            {x: altRight.parts[8].positionPrev.x, y: altRight.parts[8].positionPrev.y}, 
            null, 
            null, 
            20, 
            50, 
            50).populate()

        const rectangles = new Particles('rectangles', 
            {x: altRight.parts[7].position.x, y: altRight.parts[7].bounds.min.y}, 
            40, 
            40, 
            null, 
            50, 
            300).populate()

        const myMouse = Mouse.create(container.current)
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: myMouse,
            constraint: {
                stiffness: 0.1,
                render: {
                    visible: false
                }
            }
        })

        const walls = [
            Bodies.rectangle(containerWidth / 2, containerHeight + 500, containerWidth, 1000, { 
                isStatic: true,
                render: {
                    fillStyle: "#fff",
                }
            }),
            Bodies.rectangle(containerWidth / 2, - 500, containerWidth, 1000, { 
                isStatic: true,
                render: {
                    fillStyle: "#fff",
                }
            }),
            Bodies.rectangle(-500, containerHeight / 2, 1000, containerHeight, { 
                isStatic: true,
                render: {
                    fillStyle: "#000",
                    opacity: "0.5",
                }
            }),
            Bodies.rectangle(containerWidth - 500, containerHeight / 2, 10, containerHeight, { 
                isStatic: true,
                render: {
                    fillStyle: "#000",
                    opacity: "1",
                }
            })]
        
        console.log(altRight.parts[7])
        
        Events.on(engine.current, 'beforeUpdate', function() {
            const gravity = engine.current.gravity

            circles.forEach((ball) => {
                Body.applyForce(ball, ball.position, {x: gravity.x, y: -0.011})
                if (Collision.collides(altRight.parts[9], ball)) Body.setPosition(ball, {x: ball.position.x, y: altRight.parts[8].bounds.max.y})
                if ((ball.position.x > altRight.parts[8].bounds.max.x) || (ball.position.x < altRight.parts[8].bounds.min.x)) Body.setPosition(ball, {x: altRight.parts[8].position.x, y: altRight.parts[8].bounds.max.y})
                if ((ball.position.y > altRight.parts[8].bounds.max.y) || (ball.position.y < altRight.parts[8].bounds.min.y)) Body.setPosition(ball, {x: altRight.parts[8].position.x, y: altRight.parts[8].bounds.max.y})
            })
            rectangles.forEach((rectangle) => {
                Body.setVelocity(rectangle, {x: rectangle.velocity.x, y: -0.0035})
                if (Collision.collides(altRight.parts[10], rectangle)) Body.setPosition(rectangle, {x: rectangle.position.x, y: altRight.parts[7].bounds.min.y})
                if ((rectangle.position.x > altRight.parts[7].bounds.max.x) || (rectangle.position.x < altRight.parts[7].bounds.min.x)) Body.setPosition(rectangle, {x: altRight.parts[7].position.x, y: altRight.parts[7].bounds.min.y})
                if ((rectangle.position.y > altRight.parts[7].bounds.max.y) || (rectangle.position.y < altRight.parts[7].bounds.min.y)) Body.setPosition(rectangle, {x: altRight.parts[7].position.x, y: altRight.parts[7].bounds.min.y})
            })

        })

        Composite.add(engine.current.world, 
            [...walls,
            altRight,
            //testBody,
            ...rectangles,
            ...circles,
            mouseConstraint,]
        )
        
        render.mouse = myMouse
        Runner.run(engine.current)
        Render.run(render)

        return(() => {
            Render.stop(render)
            Composite.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.canvas = null
            render.textures = {}
        })

    }, [])

    return(
        <div className="flex justify-center">
            <div className="flex flex-col w-[90rem] h-[56.25rem] gap-[4.5rem] relative overflow-hidden" >
                <div ref={container} className="absolute left-[34rem] w-[107.3125rem] h-full z-50"></div>
                    <div className="z-[100]">
                        <Navigatinon />
                    </div>
                    <div className="flex w-[47.3125rem] flex-col items-start gap-10 ml-20">
                        <h2 className="self-stretch dark:text-white text-[#404040] font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                        <p className="w-[27.8125rem] text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                        <div className="flex items-start gap-2">
                            <ButtonPrimary width="w-[8.875rem]" />
                            <ButtonTertiary width="w-[8.875rem]" />
                        </div>
                    </div>
                    <div className="absolute top-0 right-[-12.56%] flex p-[10.75rem_0rem_10.75rem_6rem] flex-col justify-center items-center rounded-[2.5rem_0rem_0rem_2.5rem] bg-[#1F1F1F]">
                        <div className="flex items-start gap-[1.875rem]">
                            <div className="w-[17.8125rem] h-[34.75rem] rounded-[2.5rem] bg-white"></div>
                            <div className="w-[17.8125rem] h-[34.75rem] rounded-[2.5rem] bg-white"></div>
                        </div>
                    </div>
            </div>
        </div>
    )

}