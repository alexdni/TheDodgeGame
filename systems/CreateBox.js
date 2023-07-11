const CreateBox = () => {
  let body = Matter.Bodies.rectangle(
    Math.random() * (width - 100) + 50,
    Math.random() * (height - 100) + 50,
    50,
    50,
    {
      inertia: Infinity,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      restitution: 1,
    },
  );
  Matter.World.add(world, body);
  return {
    body,
    color: 'blue',
    renderer: Box,
  };
};
