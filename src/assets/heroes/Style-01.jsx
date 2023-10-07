import Navigatinon from "../navigation/Navigation.jsx"
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx"
import ButtonTertiary from "../components/buttons/ButtonTertiary.jsx"
import { useEffect, useRef } from "react"
import { Engine, Render, Composite, Runner, Bodies, Mouse, MouseConstraint, Constraint, Events, Detector } from "matter-js"

export default function Style01() {

    const canv = useRef(null)
    const engine  = useRef(Engine.create({ gravity: {y: -0.4 } }))

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
        Bodies.circle(canvWidth / 2, canvHeight / 1.5, 50, {
            isStatic: false,
            friction: 0.5,
            restitution: 0.5,
            label: "A",
            render: {
                fillStyle: "#FF0000"
            }
        }),
        Bodies.circle(canvWidth / 2  , canvHeight / 2, 50, {
            isStatic: false,
            friction: 0.5,
            restitution: 0.5,
            label: "B",
            render: {
                fillStyle: "#00FF00"
            }
        }), 
        Bodies.circle(canvWidth / 2, canvHeight / 2.5, 50, {
            isStatic: false,
            friction: 0.5,
            restitution: 0.5,
            label: "C",
            render: {
                fillStyle: "#0000FF"
            }
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
            Bodies.rectangle(canvWidth / 2, 0, canvWidth, 100, { 
                isStatic: true,
                render: {
                    fillStyle: "#fff",
                }
            }),
            Bodies.rectangle(canvWidth, canvHeight / 2, 100, canvHeight, { 
                isStatic: true,
                render: {
                    fillStyle: "#fff",
                }
            }),
            Bodies.rectangle(canvWidth / 2, canvHeight, canvWidth, 100, { 
                isStatic: true,
                render: {
                    fillStyle: "#ff0000",
                    opacity: "0.5",
                }
            }),
            Bodies.rectangle(0, canvHeight / 2, 100, canvHeight, { 
                isStatic: true,
                render: {
                    fillStyle: "#000",
                    opacity: "1",
                }
            })]

        const indicators = [
            Bodies.rectangle(canvWidth / 2, 170, canvWidth - 100, 10, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "#ff0000",
                    opacity: 0.5,
                }
            }),
            Bodies.rectangle(canvWidth / 2, canvHeight - 170, canvWidth - 100, 10, { 
                isStatic: true,
                isSensor: true,
                render: {
                    fillStyle: "#ff0000",
                    opacity: 0.5,
                }
            })
        ]

        const detect = Detector.create({
            bodies: [
                ...indicators,
                ...testBodies,
            ],
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
                        length: 150,
                        stiffness: 0.2,
                    })
                )
                prevBody = bodies[i]
            }

            return constraints
            
        }

        const verticalDelta = (indicator, collidedBody) => collidedBody.position.y - indicator.position.y
        const shapeExists = (essence, shapeName) => essence.bodyA.label.includes(shapeName) || essence.bodyB.label.includes(shapeName)
        const getReattachedConstraint = (constraint, label, attachingBody) => {
            let attachingPoint = [constraint.bodyA, constraint.bodyB].find(body => !body.label.includes(label))
            //console.log(attachingPoint)
            attachingPoint = attachingBody
            return constraint
        }

        const constraints = createConstraints(testBodies)
        let lastBody = testBodies[0]
        Events.on(engine.current, 'beforeUpdate', () => {
            Detector.collisions(detect).forEach(collision => {
                if((collision.collided) && (shapeExists(collision, "Rectangle"))) {
                    let collidedCircle, indicator, circleConstraint
                    collidedCircle = (!collision.bodyA.label.includes("Rectangle")) ? collision.bodyA : collision.bodyB
                    indicator = (collision.bodyA.label.includes("Rectangle")) ? collision.bodyA : collision.bodyB
                    circleConstraint = constraints.find(constraint => shapeExists(constraint, collidedCircle.label))
                    if (verticalDelta(indicator, collidedCircle) < -50) { 
                        Composite.remove(engine.current.world, [collidedCircle, circleConstraint])
                        const reattachedConstraint = getReattachedConstraint(circleConstraint, collidedCircle.label, lastBody)
                        //console.log(circleConstraint, reattachedConstraint)
                    }
                }
            })    
        })

        Composite.add(engine.current.world, [
            ...testBodies,  
            ...walls,
            ...indicators,
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