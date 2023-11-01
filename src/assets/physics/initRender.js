import { Render } from "matter-js";
export default class MyRender extends Render {
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
        width: this.width,
        height: this.height,
        wireframes: false,
        background: "transparent",
      },
    });
  }
}
