import React from 'react';
import {View} from 'react-native';

const Ball = props => {
  const {body} = props;
  const {position, angle} = body;
  return (
    <View
      style={[
        {
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: 20,
          height: 20,
          backgroundColor: 'red',
          borderRadius: 10,
        },
      ]}
    />
  );
};

export default Ball;
