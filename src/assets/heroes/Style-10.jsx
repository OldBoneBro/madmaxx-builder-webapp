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

        const right = Bodies.rectangle(0, containerHeight / 2, 792, 900, 
        {
            slop: 0,
            friction: 0.5,
            frictionStatic: Infinity,
            inertia: Infinity,
            render: {
                fillStyle: "#FF6EC7",
                opacity: 0.5
            },
            chamfer: {
                radius: 40,
            },
        })

        const upperBorder = Bodies.rectangle(500, 0, 396, 86, {render: { fillStyle: '#1F1F1F'}, chamfer: { radius: 15 }})
        const bottomBorder = Bodies.rectangle(500, 450, 396, 86, {render: { fillStyle: '#1F1F1F'}, chamfer: { radius: 15 }})

        function createRight() {

            return Body.create({
                isStatic: false,
                restitution: 0.5,
                inertia: Infinity,
                parts: [
                    upperBorder,
                    Bodies.rectangle(674, 225, 48, 537, {render: { fillStyle: '#1F1F1F'}, chamfer: { radius: 15 }}),
                    Bodies.rectangle(495, 250, 350, 450, {render: { fillStyle: '#1F1F1F'}, isSensor: true}),
                    Bodies.rectangle(421, 225, 143, 365, {render: { fillStyle: '#FFFFFF'}, isSensor: true, chamfer: { radius: 15 }}),
                    Bodies.rectangle(500, 225, 15, 530, {render: { fillStyle: '#1F1F1F', lineWidth: 0}}),
                    //Bodies.rectangle(578, 225, 143, 365, {render: { fillStyle: '#1F1F1F'}, isSensor: true}),
                    Bodies.rectangle(578, 225, 143, 365, {render: { fillStyle: '#FFFFFF'}, isSensor: true, chamfer: { radius: 15 }}),
                    Bodies.rectangle(326, 225, 48, 537, {render: { fillStyle: '#1F1F1F'}, chamfer: { radius: 15 }}),
                    bottomBorder,    
                ],
                friction: 0.005,
            })

        }

        const altRight = physifyRightSection()

        // const rect = Bodies.rectangle(
        //     (altRight.parts[7].position.x / 1.75) + getRandomOffset(getRandomIntNumber(119, 1)),
        //     192.5,
        //     40,
        //     40,
        //     {
        //         isStatic: false,
        //         mass: 10,
        //         restitution: 0.9,
        //         friction: 0.005,
        //     }
        // ) //(119: 280)(192.5)

        // const crlc = Bodies.circle(
        //     (altRight.parts[8].position.x / 1.35) + getRandomOffset(getRandomIntNumber(110, 1)),
        //     709,
        //     20,
        //     {
        //         isStatic: false,
        //         mass: 10,
        //         restitution: 0.9,
        //         friction: 0.005,
        //     }
        // )

        let spawnPointXforRectanhgle = (altRight.parts[7].bounds.max.x + altRight.parts[7].bounds.min.x) / 2
        console.log(altRight.parts[7].bounds.max.x, altRight.parts[7].bounds.min.x)

        const circles =  new Particles("circles", {x: altRight.parts[8].bounds.min.x, y: altRight.parts[8].bounds.min.y}, null, null, 20, 110, 100).populate()
        const rectangles =  new Particles("rectangles", {x: spawnPointXforRectanhgle - 10, y: altRight.parts[7].bounds.min.y}, 40, 40, null, 10, 300).populate()
        
        console.log('--- left backgrond ---')
        console.log(altRight.parts[7].bounds)
        console.log(altRight.parts[7].bounds.max.x, altRight.parts[7].bounds.min.x, altRight.parts[7].position.x, altRight.parts[7].position.x / 1.54)
        console.log(altRight.parts[7].bounds.max.y, altRight.parts[7].bounds.min.y, altRight.parts[7].position.y)
        console.log('--- right backgrond ---')
        console.log(altRight.parts[8].bounds)
        console.log(altRight.parts[8].bounds.max.x, altRight.parts[8].bounds.min.x, altRight.parts[8].position.x, altRight.parts[8].position.x / 1.54)
        console.log(altRight.parts[8].bounds.max.y, altRight.parts[8].bounds.min.y, altRight.parts[8].position.y)
        console.log('--- rect ---')
        console.log(rectangles[0].bounds)
        // const balls = []
        // const rectangles = []

        // for(let i = 0; i < 5; i++) {

        //     balls.push(Bodies.circle(
        //         getRandomIntNumber(482, 360),
        //         bottomBorder.position.y - 53,
        //         10,
        //         {
        //             mass: 10,
        //             restitution: 0.9,
        //             friction: 0.005,
        //         }
        //     ))

        //     rectangles.push(Bodies.rectangle(
        //         getRandomIntNumber(640, 516),
        //         bottomBorder.position.y - 53,
        //         20,
        //         20,
        //         {
        //             mass: 10,
        //             restitution: 0.9,
        //             friction: 0.005,
        //         }
        //     ))

        // }

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

        Events.on(mouseConstraint, 'click', (event) => {
            console.log('click')
            let x = event.pageX
            let y = event.pageY
            console.log(Query.point(Composite.allBodies(engine.current.world), {x, y}))
        })

        // let dragBody = null
        // let mouseRemoved = false

        // Events.on(mouseConstraint, 'startdrag', function(event) {
        //     dragBody = event.body
        //     Events.on(mouseConstraint, 'mousemove', dragging)
        //     Events.on(mouseConstraint, 'mouseup', ceaseDragging)
        // })

        // function ceaseDragging() {
        //     dragBody = null
        //     Events.off(mouseConstraint, 'mousemove')
        //     if (mouseRemoved) { 
        //         Composite.add(engine.current.world, mouseConstraint)
        //         mouseRemoved = false
        //     }
        // }

        // function dragging() {
        //     console.log(altRight.parts[2].position.x)
        //     if (Collision.collides(altRight, walls[2])) {
        //         console.log('LLL')
        //         removeMouse()
        //         Body.applyForce(altRight, { x: dragBody.position.x, y: dragBody.position.y }, { x: 2, y: 0 })
        //         balls.forEach((ball) => {
        //             repositionBody(ball, altRight.parts[2], {x: (bottomBorder.position.x / 1.25), y: (bottomBorder.position.y - 53)})
        //         })
        //     }
        //     if (Collision.collides(altRight, walls[3])?.collided) {
        //         console.log('RRR')
        //         removeMouse() 
        //         Body.applyForce(altRight, { x: dragBody.position.x, y: dragBody.position.y }, { x: -2, y: 0 })
        //         balls.forEach((ball) => {
        //             repositionBody(ball, altRight.parts[2], {x: (bottomBorder.position.x / 1.125), y: (bottomBorder.position.y - 53)})
        //         })
        //     }
        //     if (Collision.collides(altRight, walls[1])?.collided) {
        //         console.log('UUU')
        //         removeMouse() 
        //         Body.applyForce(altRight, { x: dragBody.position.x, y: dragBody.position.y }, { x: 0, y: -20 })
        //         balls.forEach((ball) => {
        //             repositionBody(ball, altRight.parts[2], {x: (bottomBorder.position.x / 1.25), y: (bottomBorder.position.y - 53)})
        //         })

        //     }
        //     if (Collision.collides(altRight, walls[0])?.collided) {
        //         console.log('DDD')
        //         //removeMouse() 
        //         Body.setPosition(altRight, { x: dragBody.position.x, y: dragBody.position.y -  Collision.collides(altRight, walls[0])?.depth})
        //     }
        // }

        // function repositionBody(absoluteBody, relativeBody, coords) {

        //     if ((absoluteBody.position.x > relativeBody.position.x) || (absoluteBody.position.x < relativeBody.position.x)) Body.setPosition(absoluteBody, {x: coords.x, y: absoluteBody.position.y})           
        //     if ((absoluteBody.position.y > relativeBody.position.y) || (absoluteBody.position.y < relativeBody.position.y)) Body.setPosition(absoluteBody, {x: absoluteBody.position.x, y: coords.y})           

        // }

        // function removeMouse() {

        //     mouseRemoved = true
        //     Composite.remove(engine.current.world, mouseConstraint)

        // }


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

        Events.on(engine.current, 'beforeUpdate', function(){
            //console.log(altRight.parts[7].bounds.max.x)
            
            const gravity = engine.current.gravity
            // balls.forEach((ball) => {
            //     //console.log(ball.position)
            //     Body.applyForce(ball, ball.position, {x: gravity.x, y: -0.011})
            //     if (Collision.collides(upperBorder, ball)) Body.setPosition(ball, {x: ball.position.x, y: bottomBorder.position.y - 50})
            //     //if ((ball.position.x > 482) || (ball.position.x < 360)) Body.setPosition(ball, {x: (bottomBorder.position.x / 1.25), y: ball.position.y})           
            // })
            // rectangles.forEach((rectangle) => {
            //     Body.applyForce(rectangle, rectangle.position, {x: gravity.x, y: -0.0099})
            //     if (Collision.collides(bottomBorder, rectangle)) Body.setPosition(rectangle, {x: rectangle.position.x, y: upperBorder.position.y + 50})  
            // })

        })

        Composite.add(engine.current.world, 
            [...walls,
            //right,
            altRight,
            //rect,
            //crlc,
            //...balls,
            ...rectangles,
            //rect,
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