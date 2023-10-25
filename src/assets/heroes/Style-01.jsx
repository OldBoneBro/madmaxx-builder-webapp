import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { useEffect, useRef } from "react"
import { Engine, Render, Composite, Runner, Bodies, Mouse, MouseConstraint, Constraint, Events, Detector, Body, Collision } from "matter-js"

export default function Style01() {

    const canv = useRef(null)
    const engine  = useRef(Engine.create({ gravity: {y: -0.2} }))

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
        const testBodies = [
        Bodies.rectangle((canvWidth / 2) + 42, canvHeight - 19, 400, 400, {
            isStatic: false,
            friction: 0.5,
            restitution: 0.5,
            mass: 10,
            inertia: Infinity,
            label: "A",
            render: {
                fillStyle: "#1F1F1F",
                
            },
            chamfer: { radius: 40}
        }),
        Bodies.rectangle((canvWidth / 2) + 42, canvHeight / 2, 400, 400, {
            isStatic: false,
            friction: 0.5,
            restitution: 0.5,
            mass: 10,
            inertia: Infinity,
            label: "B",
            render: {
                fillStyle: "#FFFFFF",
            },
            chamfer: { radius: 40}
        }), 
        Bodies.rectangle((canvWidth / 2) + 42, 19, 400, 400, {
            isStatic: false,
            friction: 0.5,
            restitution: 0.5,
            mass: 10,
            inertia: Infinity,
            label: "C",
            render: {
                fillStyle: "#1F1F1F",
            },
            chamfer: { radius: 40}
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
                    fillStyle: "transparent",                }
            }),
            Bodies.rectangle(0, canvHeight / 2, 100, canvHeight * 4, { 
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            })]

        const indicator = Bodies.rectangle(canvWidth / 2, 0, canvWidth - 100, 10, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "transparent",                }
            })

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
                        length: 432,
                        stiffness: 0.2,
                    })
                )
                prevBody = bodies[i]
            }

            return constraints
            
        }

        const verticalDelta = (indicator, collidedBody) => collidedBody.position.y - indicator.position.y
        const repositionBellow = (shape) => {

            let offscreenOffset
            switch (shape.label) {
                case 'C':
                    offscreenOffset = 400
                    break
                case 'B':
                    offscreenOffset = 823
                    break
                case 'A':
                    offscreenOffset = 1223
                    break

            }

            Body.setPosition(shape, {x: (canvWidth / 2) + 42, y: canvHeight + offscreenOffset})
            Body.setInertia(shape, Infinity)
            Body.setSpeed(shape, 0)
            Body.setVelocity(shape, {x: 0, y: 0})
            Body.setAngularSpeed(shape, 0)
            Body.setVelocity(shape, {x: 0, y: 0})

        }

        const constraints = createConstraints(testBodies)
        Events.on(engine.current, 'beforeUpdate', () => {
            if((Collision.collides(indicator, testBodies[0])?.collided) && (verticalDelta(indicator, testBodies[0]) <= -200)) {
                Composite.remove(engine.current.world, [...constraints, ...testBodies])
                testBodies.forEach((body) => repositionBellow(body))
                Composite.add(engine.current.world, [...constraints, ...testBodies])
            }
        })

        Composite.add(engine.current.world, [
            ...testBodies,  
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
                <div className="flex flex-col items-start gap-8 absolute right-40 top-[-182px]">
                    <div className="w-[25rem] h-[25rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                    <div className="w-[25rem] h-[25rem] rounded-[2.5rem] bg-white"></div>
                    <div className="w-[25rem] h-[25rem] rounded-[2.5rem] bg-[#1F1F1F]"></div>
                </div>
            </div>
        </div>
    )

}