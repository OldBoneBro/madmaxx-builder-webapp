import { Body, Composite } from "matter-js";

export function centerBody(
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  body,
  centerX,
  centerY
) {
  if (
    body.position.x > maxWidth ||
    body.position.x < minWidth ||
    body.position.y > maxHeight ||
    body.position.y < minHeight
  )
    Body.setPosition(body, { x: centerX, y: centerY });
}
