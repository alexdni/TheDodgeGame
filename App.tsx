import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import Matter from 'matter-js';
import Physics from './systems/Physics';
import CheckCollision from './systems/CheckCollision';
import Circle from './components/Circle';
import Box from './components/Box';
import Ball from './components/Ball';
import Score from './components/Score';

const {width, height} = Dimensions.get('window');
const boxSize = Math.trunc(Math.max(width, height) / 3);
const initialBalls = 10;

const CreateBox = world => {
  let body = Matter.Bodies.rectangle(
    Math.random() * (width - 100) + 50,
    Math.random() * (height - 100) + 50,
    50,
    50,
    {
      isStatic: true, // make the box static
      inertia: Infinity,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
      restitution: 1,
      label: 'box',
    },
  );
  Matter.World.addBody(world, body);
  return {
    body,
    color: 'blue',
    renderer: Box,
  };
};

const CreateCircle = (world, position) => {
  let body = Matter.Bodies.circle(position.x, position.y, 20, {
    isStatic: true,
    inertia: Infinity,
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    restitution: 1,
    label: 'circle',
  });
  Matter.World.add(world, body);
  return {
    body,
    color: 'blue',
    renderer: Circle,
  };
};

const Setup = setScore => {
  const engine = Matter.Engine.create({enableSleeping: false});
  const world = engine.world;

  let box = CreateBox(world);
  let circle = CreateCircle(world, {x: width / 2, y: height / 2});

  let entities = {
    physics: {engine: engine, world: world, initialBalls: initialBalls},
    gameStats: {
      ballsCount: {count: initialBalls},
      score: {
        score: 0,
        setScore: func => setScore(func),
      },
    },
    circle: circle,
    box: box,
  };

  for (let i = 0; i < initialBalls; i++) {
    let ballBody = Matter.Bodies.circle(
      Math.random() * width,
      Math.random() * height,
      30,
      {isStatic: false, label: 'ball${i}'},
    );
    entities[`ball${i}`] = {
      body: ballBody,
      color: 'red',
      renderer: Ball,
    };
    Matter.World.add(world, ballBody);
  }

  Matter.Events.on(engine, 'collisionStart', event => {
    var pairs = event.pairs;

    pairs.forEach(pair => {
      if (
        (pair.bodyA.label === 'circle' && pair.bodyB.label === 'box') ||
        (pair.bodyB.label === 'circle' && pair.bodyA.label === 'box')
      ) {
        // Box and circle have collided
        entities.gameStats.score.score += 10;
        entities.gameStats.score.setScore(entities.gameStats.score.score);

        // Move the box to a new location
        // Matter.Body.setPosition(entities.box.body, {
        //   x: Math.random() * (width - 100) + 50,
        //   y: Math.random() * (height - 100) + 50,
        // });

        Matter.Body.setPosition(entities.box.body, {
          x: Math.random() * (width - boxSize) + boxSize / 2,
          y: Math.random() * (height - boxSize) + boxSize / 2,
        });
      }

      if (
        // (pair.bodyA.label === 'circle' &&
        //   pair.bodyB.label.startsWith('ball')) ||
        // (pair.bodyB.label === 'circle' && pair.bodyA.label.startsWith('ball'))
        (pair.bodyA.label === 'circle' &&
          pair.bodyB.label.startsWith('ball')) ||
        (pair.bodyB.label === 'circle' && pair.bodyA.label.startsWith('ball'))
      ) {
        entities.gameStats.score.score -= 5;
        entities.gameStats.score.setScore(entities.gameStats.score.score);
      }
    });
  });

  return {
    entities,
    physics: {engine: engine, world: world, initialBalls: initialBalls},
    gameStats: {
      ballsCount: {count: initialBalls},
      score: {
        score: 0,
        setScore: func => setScore(func),
      },
    },
  };
};

const MoveCircle = (entities, {touches}) => {
  let move = touches.find(x => x.type === 'move');
  if (move) {
    let circle = entities.circle;
    Matter.Body.setStatic(circle.body, false);
    Matter.Body.setPosition(circle.body, {
      x: move.event.pageX,
      y: move.event.pageY,
    });
  }
  return entities;
};

const App = () => {
  const [score, setScore] = useState(0);
  const {entities, physics, gameStats} = Setup(setScore);

  return (
    <GameEngine
      systems={[Physics, MoveCircle]}
      entities={entities}
      physics={physics}
      gameStats={gameStats}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}>
      <Score score={score} setScore={setScore} />
    </GameEngine>
  );
};

export default App;
