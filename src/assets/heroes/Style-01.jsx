import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { useEffect, useRef } from "react"
import { Engine, Render, Composite, Runner, Bodies, Mouse, MouseConstraint, Events, Collision } from "matter-js"
import { reposition } from "../physics/reposition.js"
import { createConstraints } from "../physics/createConstraints.js"

export default function Style01() {

    const canv = useRef(null)
    const engine  = useRef(Engine.create({ gravity: {y: -0.1} }))

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

        const width = 400
        const height = 400

        const roundedRectangles = [
            Bodies.rectangle((canvWidth / 2) + 42, canvHeight - 19, width, height, {
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
            Bodies.rectangle((canvWidth / 2) + 42, canvHeight / 2, width, height, {
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
            Bodies.rectangle((canvWidth / 2) + 42, 19, width, height, {
                isStatic: false,
                friction: 0.5,
                restitution: 0.5,
                mass: 10,
                inertia: Infinity,
                label: "C",
                render: {
                    fillStyle: "#1F1F1F",
                },
                chamfer: { radius: 40},
                width: width,
                height: height,
        })]

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

        const walls = [
            Bodies.rectangle(canvWidth, canvHeight / 2, 100, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            }),
            Bodies.rectangle(0, canvHeight / 2, 100, canvHeight * 4, { 
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
            })]
            
        const indicator = Bodies.rectangle(canvWidth / 2, -500, canvWidth - 100, 100, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "#00FF00",                
                }
        })

        const constraints = createConstraints(roundedRectangles, 433)
        Events.on(engine.current, 'beforeUpdate', () => {
            if((Collision.collides(indicator, roundedRectangles[0])?.collided)) {
                Composite.remove(engine.current.world, [...constraints, ...roundedRectangles])
                roundedRectangles.forEach((body) => reposition(canvWidth, canvHeight, 41.5, body))
                Composite.add(engine.current.world, [...constraints, ...roundedRectangles])
            }
        })

        mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel)
        mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)

        Composite.add(engine.current.world, [
            ...roundedRectangles,  
            ...walls,
            indicator,
            mouseConstraint,
            ...constraints,
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
            </div>
        </div>
    )

}