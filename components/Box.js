import React from 'react';
import {View} from 'react-native';

const Box = ({body, color}) => {
  const {position} = body;

  const boxStyle = {
    position: 'absolute',
    left: position.x - 25, // subtract half of the box size to center
    top: position.y - 25, // subtract half of the box size to center
    width: 50,
    height: 50,
    backgroundColor: color,
  };

  return <View style={boxStyle} />;
};

export default Box;
