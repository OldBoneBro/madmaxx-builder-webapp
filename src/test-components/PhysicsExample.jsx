import { useEffect, useRef } from "react"
import { Engine, Render, Bodies, Body, Runner, Mouse, MouseConstraint, Composite } from "matter-js"
import { getRandomIntNumber } from "../utils/getRandomIntNumber.js"



export default function PhysicsExample() {
    
    const scene = useRef()
    const container = useRef()
    const engine = useRef(Engine.create())

    useEffect(() =>{

        const containerWidth = container.current.clientWidth
        const containerHeight = container.current.clientHeight
        const sceneWidth = scene.current.clientWidth
        const sceneHeight = scene.current.clientHeight

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: sceneWidth,
                height: sceneHeight,
                wireframes: false,
                background: 'transparent'
            }
        })


        const myMouse = Mouse.create(scene.current)
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: myMouse,
            constraint: {
                render: {
                    visible: false
                }
            }
        })

        Composite.add(engine.current.world, [
            Bodies.rectangle(0, sceneHeight, 100, containerHeight, { isStatic: true }),
            Bodies.rectangle(sceneWidth, sceneHeight, 100, containerHeight, { isStatic: true }),
            Bodies.rectangle(0, 0, containerWidth, 100, { isStatic: true }),
            Bodies.rectangle(0, sceneHeight, containerWidth, 100, { isStatic: true }),
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
            render.context = null
            render.textures = {}
        })

    }, [])

    const handleAddCircle = e => {

            const sceneCoords = scene.current.getBoundingClientRect()

            const r = getRandomIntNumber(30, 5)
            const x = Math.trunc((Number(e.clientX) - Number(sceneCoords.x)))
            const y = Math.trunc((Number(e.clientY) - Number(sceneCoords.y)))

            const ball = Bodies.circle(
            x,
            y,
            r,
            {
                mass: r,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    fillStyle: '#000',
                    strokeStyle: '#fff',
                    lineWidthL: 3
                }
            })

            const myBox = [
                Bodies.rectangle(x, y - 50, 100, 10),
                Bodies.rectangle(x + 50, y, 10, 100),
                Bodies.rectangle(x - 50, y - 50, 10, 100),
                Bodies.rectangle(x, y + 50, 100, 10),
            ]

            const rect = Bodies.rectangle(
                x,
                y,
                100,
                100,
                {
                    isStatic: false,
                    render: {
                        strokeStyle: '#fff',
                        lineWidth: 5,
                    },
                    chamfer:{
                        radius: 5,
                    }
                }
            )

            const smallRect = Bodies.circle(
                x,
                y,
                r,
                {
                    mass: r,
                    restitution: 0,
                    friction: 0.005,
                    render: {
                        strokeStyle: '#fff',
                        lineWidth: 5,
                    },
                }
            )

            function offTheScene(bodies) {

                const circles = bodies.filter((body) => body.label === 'Circle Body')
                circles.forEach(circle => {

                    if (!circle) return
                    if ((circle.position.y > scene.current.clientHeight + 100)) Composite.remove(engine.current.world, circle)

                })
    
            }

            const myCompoundBody = Body.create({
                isStatic: false,
                parts: [
                    Bodies.rectangle(x, y - 45, 100, 10),
                    Bodies.rectangle(x + 45, y, 10, 100),
                    Bodies.rectangle(x - 45, y, 10, 100),
                    Bodies.rectangle(x, y + 45, 100, 10),    
                ],
                friction: 0.005,
            }) 


            Composite.add(engine.current.world, [myCompoundBody, smallRect])
            console.log(smallRect, x, y)
            
            //offTheScene(Composite.allBodies(engine.current.world))

        }

    return(
        <div ref={container} className="flex w-screen h-screen justify-center items-center">
            <div
                onContextMenu={handleAddCircle}
                ref={scene}  
                className="w-2/4 h-2/4 bg-slate-600" 
            ></div>
        </div>
    )

}