import { Body } from "matter-js";

export const reposition = (
  width,
  height,
  widthOffset,
  shape,
  substract = false
) => {
  let offscreenOffset;
  switch (shape.label) {
    case "D":
      offscreenOffset = 263;
      break;
    case "C":
      offscreenOffset = shape.width === 400 ? 400 : 424;
      break;
    case "B":
      offscreenOffset = shape.width === 400 ? 823 : 712;
      break;
    case "A":
      offscreenOffset = shape.width === 400 ? 1223 : 999;
      break;
  }

  let newWidth = width / 2;
  let newHeight = substract
    ? height - offscreenOffset
    : height + offscreenOffset;

  Body.setPosition(shape, {
    x: newWidth + widthOffset,
    y: height + offscreenOffset,
  });
  Body.setInertia(shape, Infinity);
  Body.setSpeed(shape, 0);
  Body.setVelocity(shape, { x: 0, y: 0 });
  Body.setAngularSpeed(shape, 0);
  Body.setVelocity(shape, { x: 0, y: 0 });
};
