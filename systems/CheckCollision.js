import Matter from 'matter-js';

const CheckCollision = entities => {
  const circleBody = entities['circle'].body;
  const boxBody = entities['box'].body;

  Object.values(entities).forEach(entity => {
    if (entity.body && entity.body.label === 'ball') {
      const collision = Matter.SAT.collides(circleBody, entity.body);
      console.log('Ball collision result: ', collision);
      if (collision && collision.collided) {
        // Collision with a ball
        entities['score'].setScore(score => score - 5);
      }
    }
  });

  const boxCollision = Matter.SAT.collides(circleBody, boxBody);
  console.log('Box collision result: ', boxCollision);
  if (boxCollision && boxCollision.collided) {
    // Collision with the box
    entities['score'].setScore(score => score + 10);
    const {width, height} = entities['screen'];
    Matter.Body.setPosition(boxBody, {
      x: Math.random() * width,
      y: Math.random() * height,
    });
    entities['ballsCount'].count = Math.ceil(
      entities['ballsCount'].count * 1.1,
    );
  }

  return entities;
};

export default CheckCollision;
