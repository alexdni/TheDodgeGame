import Matter from 'matter-js';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const BALL_SPEED = 5;

const getRandomVelocity = () => {
  const direction = Math.random() > 0.5 ? -1 : 1; // random direction
  const speed = BALL_SPEED;
  return direction * speed;
};

const Physics = (entities, {time}) => {
  let engine = entities.physics.engine;
  let gameStats = entities.gameStats;

  Matter.Engine.update(engine, time.delta);

  Object.values(entities).forEach(entity => {
    if (entity.body && entity.body.position && entity !== entities.circle) {
      const {body} = entity;

      // Add a small random impulse
      const impulse = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
      };

      Matter.Body.applyForce(body, body.position, impulse);

      // Check for out of bounds and bounce
      if (body.position.y <= body.circleRadius) {
        // Top boundary
        Matter.Body.setPosition(body, {
          x: body.position.x,
          y: body.circleRadius,
        });
        Matter.Body.setVelocity(body, {
          x: getRandomVelocity(),
          y: Math.abs(body.velocity.y),
        });
      } else if (body.position.y >= height - body.circleRadius) {
        // Bottom boundary
        Matter.Body.setPosition(body, {
          x: body.position.x,
          y: height - body.circleRadius,
        });
        Matter.Body.setVelocity(body, {
          x: getRandomVelocity(),
          y: -Math.abs(body.velocity.y),
        });
      }

      if (body.position.x <= body.circleRadius) {
        // Left boundary
        Matter.Body.setPosition(body, {
          x: body.circleRadius,
          y: body.position.y,
        });
        Matter.Body.setVelocity(body, {
          x: Math.abs(body.velocity.x),
          y: getRandomVelocity(),
        });
      } else if (body.position.x >= width - body.circleRadius) {
        // Right boundary
        Matter.Body.setPosition(body, {
          x: width - body.circleRadius,
          y: body.position.y,
        });
        Matter.Body.setVelocity(body, {
          x: -Math.abs(body.velocity.x),
          y: getRandomVelocity(),
        });
      }
    }
  });

  return entities;
};

export default Physics;
