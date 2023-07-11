import React from 'react';
import {View, Text} from 'react-native';

const Score = ({score}) => {
  return (
    <View style={{position: 'absolute', top: 50, left: 10}}>
      <Text style={{fontSize: 20}}>Score: {score}</Text>
    </View>
  );
};

export default Score;
