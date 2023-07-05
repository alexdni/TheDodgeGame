import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import Physics from './Physics';
import Ball from './Ball';

const {width, height} = Dimensions.get('window');
const velocity = 5;

const Setup = () => {
  // initialize Matter.js engine and world
  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;

  world.gravity.y = 0;

  // create an array of balls
  let balls = Array.from({length: 10}).map((_, i) => {
    let body = Matter.Bodies.circle(
      Math.random() * width,
      Math.random() * height,
      20,
      {
        frictionAir: 0,
      },
    );

    // Apply initial velocity after balls have been created
    Matter.Body.setVelocity(body, {
      x: velocity,
      y: velocity,
    });

    Matter.World.add(world, [body]);
    return {
      body: body,
      color: 'red',
      renderer: <Ball />,
      id: `ball_${i}`,
    };
  });

  return {
    physics: {engine: engine, world: world},
    ...balls,
  };
};

export default Setup;
