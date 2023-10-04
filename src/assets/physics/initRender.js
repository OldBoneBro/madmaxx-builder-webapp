import { Render } from "matter-js";

class MyRender extends Render {
  constructor(width, height, element, engine) {
    this.width = width;
    this.height = height;
    this.element = element;
    this.engine = engine;
  }

  initialize() {
    super.create({
      element: this.element,
      engine: this.engine,
      options: {
        width: containerWidth - 544,
        height: containerHeight,
        wireframes: false,
        background: "transparent",
      },
    });
  }
}
