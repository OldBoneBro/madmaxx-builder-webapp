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
    const withFigures = useRef(false)
    
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
                }
        })

        const right = physifyRightSection()

        const circles = new Particles('circles', 
            {x: right.parts[8].positionPrev.x, y: right.parts[8].positionPrev.y}, 
            null, 
            null, 
            20, 
            50, 
            50).populate()

        const rectangles = new Particles('rectangles', 
            {x: right.parts[7].position.x, y: right.parts[7].bounds.min.y}, 
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
                    fillStyle: "#ff0000",
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
        
        function setCollision(staticBody, dynamicBody, containerBody) {

            if(dynamicBody.label.includes('circle')) {
                Body.applyForce(dynamicBody, dynamicBody.position, {x: 0, y: -0.011})
                if (Collision.collides(staticBody, dynamicBody)) Body.setPosition(dynamicBody, {x: dynamicBody.position.x, y: containerBody.bounds.max.y})
                if ((dynamicBody.position.x > containerBody.bounds.max.x) || (dynamicBody.position.x < containerBody.bounds.min.x)) Body.setPosition(dynamicBody, {x: containerBody.position.x, y: containerBody.bounds.max.y})
                if ((dynamicBody.position.y > containerBody.bounds.max.y) || (dynamicBody.position.y < containerBody.bounds.min.y)) Body.setPosition(dynamicBody, {x: containerBody.position.x, y: containerBody.bounds.max.y})
            }
            if(dynamicBody.label.includes('rectangle')) {
                Body.setVelocity(dynamicBody, {x: dynamicBody.velocity.x, y: -0.0035})
                if (Collision.collides(staticBody, dynamicBody)) Body.setPosition(dynamicBody, {x: dynamicBody.position.x, y: containerBody.bounds.min.y})
                if ((dynamicBody.position.x > containerBody.bounds.max.x) || (dynamicBody.position.x < containerBody.bounds.min.x)) Body.setPosition(dynamicBody, {x: containerBody.position.x, y: containerBody.bounds.min.y})
                if ((dynamicBody.position.y > containerBody.bounds.max.y) || (dynamicBody.position.y < containerBody.bounds.min.y)) Body.setPosition(dynamicBody, {x: containerBody.position.x, y: containerBody.bounds.min.y})
            }
            
        }
        
        Events.on(engine.current, 'beforeUpdate', function() {
            if((Collision.collides(walls[2], right)) && (!withFigures.current)) {
                Composite.add(engine.current.world, [
                    ...rectangles,
                    ...circles,        
                ])
                withFigures.current = true
            }

            if (withFigures.current) {
                circles.forEach((ball) => setCollision(right.parts[9], ball, right.parts[8]))
                rectangles.forEach((rectangle) => setCollision(right.parts[10], rectangle, right.parts[7]))
            }
        })

        Composite.add(engine.current.world, 
            [...walls,
            right,
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
                    {/* <div className="absolute top-0 right-[-12.56%] flex p-[10.75rem_0rem_10.75rem_6rem] flex-col justify-center items-center rounded-[2.5rem_0rem_0rem_2.5rem] bg-[#1F1F1F]">
                        <div className="flex items-start gap-[1.875rem]">
                            <div className="w-[17.8125rem] h-[34.75rem] rounded-[2.5rem] bg-white"></div>
                            <div className="w-[17.8125rem] h-[34.75rem] rounded-[2.5rem] bg-white"></div>
                        </div>
                    </div> */}
            </div>
        </div>
    )

}