import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { Engine, Render, Composite, Runner, Bodies, Mouse, MouseConstraint, Constraint, Events, Body, Collision } from "matter-js"
import { useEffect, useRef } from "react"


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
            Bodies.rectangle(canvWidth + 60, canvHeight / 2, 100, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "#00FF00",
                }
            }),
            Bodies.rectangle(58, canvHeight / 2, 500, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "#FF0000",
                }
            }),
            Bodies.rectangle(587, canvHeight / 2, 24, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "#0000FF",
                    opacity: 0.5,
                }
            })
        ]

        const indicators = [
            Bodies.rectangle(canvWidth / 2, 0, canvWidth + 60, 100, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "#398902",
                    opacity: 0.5,                
                }
            }),
            Bodies.rectangle(canvWidth / 2, canvHeight, canvWidth + 60, 100, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "#283378",
                    opacity: 0.5,                
                }
            }),       
        ]

        const roundedRectangles = [
            Bodies.rectangle((canvWidth / 2) + 41.5, 799, 240, 240, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "A",
                render: {
                    fillStyle: "#3fd977",
                    opacity: 0.75,
                },
                chamfer: { radius: 40}
            }),
            Bodies.rectangle((canvWidth / 2) + 41.5, 512, 240, 240, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "B",
                render: {
                    fillStyle: "#3fd977",
                    opacity: 0.75,
                },
                chamfer: { radius: 40}
            }), 
            Bodies.rectangle((canvWidth / 2) + 41.5, 224, 240, 240, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "C",
                render: {
                    fillStyle: "#3fd977",
                    opacity: 0.75,
                },
                chamfer: { radius: 40}
            }),
            Bodies.rectangle((canvWidth / 2) + 41.2, -63, 240, 240, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "D",
                render: {
                    fillStyle: "#3fd977",
                    opacity: 0.5,
                },
                chamfer: { radius: 40}
            })
        ]

        const createConstraints = (bodies) =>  {

            const constraints = []
            let prevBody = null
            for(let i = 0; i < bodies.length; i++) {
                if (prevBody === null) {
                    prevBody = bodies[0]
                    continue
                }
                constraints.push(
                    Constraint.create({
                        bodyA: prevBody,
                        bodyB: bodies[i],
                        length: 288,
                        stiffness: 0.2,
                        render: {
                            visible: true,
                        }
                    })
                )
                prevBody = bodies[i]
            }

            return constraints
            
        }

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

        //Body.applyForce(bodyB, bodyB.position, {x: 0, y: -0.011})

        Events.on(engine.current, 'beforeUpdate', () => {
            roundedRectangles.forEach(rectangle => {
                Body.applyForce(rectangle, rectangle.position, {x: 0, y: -0.011})
            })
        })


        const constraints = createConstraints(roundedRectangles)

        Composite.add(engine.current.world, [
            ...walls,
            ...indicators,
            ...roundedRectangles,
            ...constraints,
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
                <div className="flex flex-col items-start gap-12 absolute right-[16.66%] top-[-20.42%]">
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
                </div>
            </div>
        </div>
        
    )

}
