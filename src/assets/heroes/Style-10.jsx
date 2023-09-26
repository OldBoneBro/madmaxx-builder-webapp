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
    const doubleCreatedRectangles = useRef(false)
    const doubleCreatedCircles = useRef(false)
    
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
            // if (type === 'circles') {
            //     createParticles =  new Promise(function(res) {
            //         setTimeout(() => res, 0)})
            // } 

            return await createParticles

        }

        // console.log(gimmeParticles('circles').then(result => {
        //     if(doubleCreatedCircles.current) Composite.add(engine.current.world, result)
        //     doubleCreatedCircles.current = !doubleCreatedCircles.current
        // }))
        // console.log(gimmeParticles('rectangles').then(result => {
        //     if(doubleCreatedRectangles.current) Composite.add(engine.current.world, result)
        //     doubleCreatedRectangles.current = !doubleCreatedRectangles.current
        // }))

        const testBody = Bodies.circle(altRight.parts[7].bounds.min.x, altRight.parts[7].bounds.min.y, 20,{
              isStatic: true,
              mass: 10,
              restitution: 0.9,
              friction: 0.005,
            })

        const testCircles = new Particles('circles', 
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
        
        console.log(altRight.parts[7])
        
        Events.on(engine.current, 'beforeUpdate', function() {
            const rectangles = Composite.allBodies(engine.current.world).filter(body => body.label.includes('rectangle'))
            const balls = Composite.allBodies(engine.current.world).filter(body => body.label.includes('circle'))
            const gravity = engine.current.gravity

            // testCircles.forEach((ball) => {
            //     Body.applyForce(ball, ball.position, {x: gravity.x, y: -0.011})
            //     if (Collision.collides(altRight.parts[9], ball)) Body.setPosition(ball, {x: ball.position.x, y: altRight.parts[8].bounds.max.y})
            //     if ((ball.position.x > altRight.parts[8].bounds.max.x) || (ball.position.x < altRight.parts[8].bounds.min.x)) Body.setPosition(ball, {x: altRight.parts[8].position.x, y: altRight.parts[8].position.y})
            //     if ((ball.position.y > altRight.parts[8].bounds.max.y) || (ball.position.y < altRight.parts[8].bounds.min.y)) Body.setPosition(ball, {x: altRight.parts[8].position.x, y: altRight.parts[8].position.y})

            //     //if ((ball.position.x > 482) || (ball.position.x < 360)) Body.setPosition(ball, {x: (bottomBorder.position.x / 1.25), y: ball.position.y})           
            // })
            // rectangles.forEach((rectangle) => {
            //     //Body.applyForce(rectangle, rectangle.position, {x: gravity.x, y: -0.0035})
            //     Body.setVelocity(rectangle, {x: rectangle.velocity.x, y: -0.0035})
            //     if (Collision.collides(altRight.parts[10], rectangle)) Body.setPosition(rectangle, {x: rectangle.position.x, y: altRight.parts[7].bounds.min.y})
            //     if ((rectangle.position.x > altRight.parts[7].bounds.max.x) || (rectangle.position.x < altRight.parts[7].bounds.min.x)) Body.setPosition(rectangle, {x: altRight.parts[7].position.x, y: altRight.parts[7].position.y})
            //     if ((rectangle.position.y > altRight.parts[7].bounds.max.y) || (rectangle.position.y < altRight.parts[7].bounds.min.y)) Body.setPosition(rectangle, {x: altRight.parts[7].position.x, y: altRight.parts[7].position.y})
  
            // })

        })

        Composite.add(engine.current.world, 
            [...walls,
            //right,
            altRight,
            testBody,
            //...rectangles,
            //...testCircles,
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