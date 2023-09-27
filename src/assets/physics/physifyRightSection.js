import { Bodies, Body } from "matter-js";
import { getRandomOffset, getRandomIntNumber } from "../../utils/getRandom";

export function physifyRightSection() {
  const leftWall = Bodies.rectangle(102, 450, 96, 900, {
    isStatic: true,
    render: { fillStyle: "#1F1F1F" },
    chamfer: { radius: [40, 0, 0, 40] },
    label: "leftWall",
  });
  const rightWall = Bodies.rectangle(798, 450, 96, 900, {
    isStatic: true,
    render: { fillStyle: "#1F1F1F" },
    chamfer: { radius: [0, 40, 40, 0] },
    label: "rightWall",
  });
  const topWall = Bodies.rectangle(450, 86, 792, 172, {
    isStatic: true,
    render: { fillStyle: "#1F1F1F" },
    chamfer: { radius: [40, 40, 0, 0] },
    label: "topWall",
  });
  const bottomWall = Bodies.rectangle(450, 814, 792, 172, {
    isStatic: true,
    render: { fillStyle: "#1F1F1F" },
    chamfer: { radius: [0, 0, 40, 40] },
    label: "bottomWall",
  });
  const devider = Bodies.rectangle(450, 450, 30, 900, {
    isStatic: true,
    render: { fillStyle: "#1F1F1F" },
    label: "devider",
  });
  const background = Bodies.rectangle(450, 450, 650, 600, {
    isStatic: true,
    isSensor: true,
    render: { fillStyle: "#1F1F1F" },
    label: "background",
  });
  const innerTopRight = Bodies.rectangle(608, 170, 285, 10, {
    isStatic: true,
    isSensor: true,
    render: { fillStyle: "transparent" },
    label: "innerTopRight",
  });
  const innerBottomLeft = Bodies.rectangle(292, 725, 285, 10, {
    isStatic: true,
    isSensor: true,
    render: { fillStyle: "transparent" },
    label: "innerBottomLeft",
  });
  const innerLeftBackground = Bodies.rectangle(292, 450, 285, 557, {
    isStatic: true,
    isSensor: true,
    render: { fillStyle: "#fff" },
    chamfer: { radius: 40 },
    label: "innerLeftBackground",
  });
  const innerRightBackground = Bodies.rectangle(608, 450, 285, 557, {
    isStatic: true,
    isSensor: true,
    render: { fillStyle: "#fff" },
    chamfer: { radius: 40 },
    label: "innerRightBackground",
  });

  const right = Body.create({
    isStatic: false,
    restitution: 0.5,
    inertia: Infinity,
    friction: 0.5,
    parts: [
      topWall,
      rightWall,
      devider,
      bottomWall,
      leftWall,
      background,
      innerLeftBackground,
      innerRightBackground,
      innerTopRight,
      innerBottomLeft,
    ],
  });

  Body.translate(right, { x: 326, y: right.position.y }); //326

  return right;
}

export class Particles {
  constructor(
    type,
    { x, y },
    width = null,
    height = null,
    radius = null,
    xMaxOffset,
    yMaxOffset
  ) {
    (this.type = type),
      (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.radius = radius);
    this.xMaxOffset = xMaxOffset;
    this.yMaxOffset = yMaxOffset;
  }

  populate() {
    const particles = [];

    for (let i = 0; i < 5; i++) {
      if (this.type === "circles" && this.type) {
        particles.push(
          Bodies.circle(
            this.x + getRandomIntNumber(this.xMaxOffset),
            this.y - getRandomIntNumber(this.yMaxOffset),
            this.radius,
            {
              isStatic: false,
              mass: 10,
              restitution: 0.9,
              friction: 0.005,
              label: "circle" + i,
            }
          )
        );
      }
      if (this.type === "rectangles" && this.type) {
        particles.push(
          Bodies.rectangle(
            this.x - getRandomIntNumber(this.xMaxOffset),
            this.y + getRandomIntNumber(this.yMaxOffset),
            this.width,
            this.height,
            {
              isStatic: false,
              mass: 10,
              restitution: 0.9,
              friction: 0.005,
              label: "rectangle" + i,
            }
          )
        );
      }
    }

    return particles;
  }
}
