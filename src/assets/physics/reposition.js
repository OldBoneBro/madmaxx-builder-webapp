import { Body } from "matter-js";

export const reposition = (
  width,
  height,
  widthOffset,
  shape,
  goingDown = false
) => {
  let offscreenOffset;
  switch (shape.label) {
    case "D":
      offscreenOffset = goingDown ? 999 : 263;
      break;
    case "C":
      offscreenOffset = shape.width === 400 ? 400 : goingDown ? 712 : 424;
      break;
    case "B":
      offscreenOffset = shape.width === 400 ? 823 : goingDown ? 424 : 712;
      break;
    case "A":
      offscreenOffset = shape.width === 400 ? 1223 : goingDown ? 263 : 999;
      break;
  }

  let newWidth = width / 2;
  let newHeight = goingDown ? 0 - offscreenOffset : height + offscreenOffset;

  Body.setPosition(shape, {
    x: newWidth + widthOffset,
    y: newHeight,
  });
  Body.setInertia(shape, Infinity);
  Body.setSpeed(shape, 0);
  Body.setVelocity(shape, { x: 0, y: 0 });
  Body.setAngularSpeed(shape, 0);
  Body.setVelocity(shape, { x: 0, y: 0 });
};
