import { Constraint } from "matter-js";

export const createConstraints = (bodies, length) => {
  const constraints = [];
  let prevBody = null;
  for (let i = 0; i < bodies.length; i++) {
    if (prevBody === null) {
      prevBody = bodies[0];
      continue;
    }
    constraints.push(
      Constraint.create({
        bodyA: prevBody,
        bodyB: bodies[i],
        length: length,
        stiffness: 0.2,
        render: {
          visible: false,
        },
      })
    );
    prevBody = bodies[i];
  }

  return constraints;
};
