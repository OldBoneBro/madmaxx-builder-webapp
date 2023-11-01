import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { Engine, Render, Composite, Runner, Bodies, Mouse, MouseConstraint, Constraint, Events, Body, Collision } from "matter-js"
import { useEffect, useRef } from "react"
import { reposition } from "../physics/reposition.js"
import { createConstraints } from "../physics/createConstraints.js"


export default function Style04() {

    const canv = useRef(null)
    const engine  = useRef(Engine.create())

    useEffect(() => {

        const canvWidth = canv.current.clientWidth
        const canvHeight = canv.current.clientHeight

        const render = Render.create({
            element: canv.current,
            engine: engine.current,
            options: {
                width: canvWidth,
                height: canvHeight,
                wireframes: false,
                background: 'transparent',
            }
        })

        const walls = [
            Bodies.rectangle(canvWidth + 100, canvHeight / 2, 100, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            }),
            Bodies.rectangle(58, canvHeight / 2, 500, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            }),
            Bodies.rectangle(0, canvHeight * 3, canvWidth * 2, 100, { 
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            })
        ]

        const indicators = [
            Bodies.rectangle(canvWidth / 2, -280, canvWidth + 100, 100, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "transparent",
                }
            }),
            Bodies.rectangle(canvWidth / 2, canvHeight + 280, canvWidth + 100, 100, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "transparent",
                }
            }),       
        ]

        const width = 240
        const height = 240

        const roundedRectanglesUp = [
            Bodies.rectangle((canvWidth / 2) + 41.5, 799, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "A",
                render: {
                    fillStyle: "#1F1F1F",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            }),
            Bodies.rectangle((canvWidth / 2) + 41.5, 512, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "B",
                render: {
                    fillStyle: "#FFFFFF",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            }), 
            Bodies.rectangle((canvWidth / 2) + 41.5, 224, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "C",
                render: {
                    fillStyle: "#FFFFFF",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            }),
            Bodies.rectangle((canvWidth / 2) + 41.2, -63, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "D",
                render: {
                    fillStyle: "#1F1F1F",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            })
        ]

        const roundedRectanglesDown = [
            Bodies.rectangle((canvWidth / 2) + 329, 960, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "A",
                render: {
                    fillStyle: "#FFFFFF",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            }),
            Bodies.rectangle((canvWidth / 2) + 329, 672, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "B",
                render: {
                    fillStyle: "#1F1F1F",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            }), 
            Bodies.rectangle((canvWidth / 2) + 329, 384, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "C",
                render: {
                    fillStyle: "#FFFFFF",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            }),
            Bodies.rectangle((canvWidth / 2) + 329, 96, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "D",
                render: {
                    fillStyle: "#FFFFFF",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
            })
        ]

        const myMouse = Mouse.create(canv.current)
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: myMouse,
            constraint: {
                stiffness: 0.1,
                render: {
                    visible: false
                }
            }
        })

        const constraintsUp = createConstraints(roundedRectanglesUp, 288)
        const constraintsDown = createConstraints(roundedRectanglesDown, 288)

        Events.on(engine.current, 'beforeUpdate', () => {
            roundedRectanglesUp.forEach(rectangle => Body.applyForce(rectangle, rectangle.position, {x: 0, y: -0.011}))
            roundedRectanglesDown.forEach(rectangle => Body.setVelocity(rectangle, {x: rectangle.velocity.x, y: -0.0035}))
            if((Collision.collides(indicators[0], roundedRectanglesUp[0])?.collided)) {
                Composite.remove(engine.current.world, [...constraintsUp, ...roundedRectanglesUp])
                roundedRectanglesUp.forEach((body) => reposition(canvWidth, canvHeight, 41.5, body))
                Composite.add(engine.current.world, [...constraintsUp, ...roundedRectanglesUp])
            }
            if((Collision.collides(indicators[1], roundedRectanglesDown[roundedRectanglesDown.length - 1])?.collided)) {
                Composite.remove(engine.current.world, [...constraintsDown, ...roundedRectanglesDown])
                roundedRectanglesDown.forEach((body) => reposition(canvWidth, canvHeight, 330, body, true))
                Composite.add(engine.current.world, [...constraintsDown, ...roundedRectanglesDown])
            }
        })

        mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel)
        mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)

        Composite.add(engine.current.world, [
            ...walls,
            ...indicators,
            ...roundedRectanglesUp,
            ...roundedRectanglesDown,
            ...constraintsUp,
            ...constraintsDown,
            mouseConstraint,
        ])

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

        <div className="flex flex-col w-[90rem] h-[56.25rem] gap-[4.5rem] relative overflow-hidden">
            <Navigatinon style={11} />
            <div ref={canv} className="absolute left-[39.8125rem] w-[50.1875rem] h-full z-50"></div>
            <div className="flex gap-20 ml-20">
                <div className="flex w-[45rem] flex-col items-start gap-10">
                    <h2 className="self-stretch dark:text-white text-[#404040] font-inter text-[6rem]/[7rem] not-italic font-semibold tracking-[-0.24rem]">Build your landings in minutes</h2>
                    <p className="w-[27.8125rem] text-[#757575] font-inter text-lg not-italic font-medium tracking-[-0.0225rem]">The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.</p>
                    <div className="flex items-start gap-2">
                        <ButtonPrimary width="w-[8.875rem]" />
                        <ButtonTertiary width="w-[8.875rem]" />
                    </div>
                </div>
                {/* <div className="flex flex-col items-start gap-12 absolute right-[16.66%] top-[-20.42%]">
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-white"></div>
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-white"></div>
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                </div>
                <div className="flex flex-col items-start gap-12 absolute right-[-3.33%] top-[-2.66%]">
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-white"></div>
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-white"></div>
                    <div className="w-[15rem] h-[15rem] rounded-[2.5rem] bg-white"></div>
                </div> */}
            </div>
        </div>
        
    )

}
