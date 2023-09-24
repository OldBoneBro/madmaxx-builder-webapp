window.addEventListener("load", init);

function init() {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

  const engine = Engine.create();

  const render = Render.create({
    element: document.body,
    engine: engine,
  });

  const boxA = Bodies.rectangle(400, 200, 80, 80);
  const boxB = Bodies.rectangle(450, 50, 80, 80);
  const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  Composite.add(engine.world, [boxA, boxB, ground]);

  Render.run(render);

  const runner = Runner.create();

  Runner.run(runner, engine);
}
