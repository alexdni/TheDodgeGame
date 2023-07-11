import React from 'react';
import {View} from 'react-native';

const Circle = ({body, color}) => {
  const {position} = body;

  const circleStyle = {
    position: 'absolute',
    left: position.x - 30, // subtract half of the circle size to center
    top: position.y - 30, // subtract half of the circle size to center
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: color,
  };

  return <View style={circleStyle} />;
};

export default Circle;
