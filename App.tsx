import React from 'react';
import {GameEngine} from 'react-native-game-engine';
import {StatusBar, StyleSheet} from 'react-native';
import Ball from './Ball';
import Setup from './Setup';
import Physics from './Physics';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: true,
    };

    this.gameEngine = null;

    this.entities = Setup();
  }

  render() {
    return (
      <GameEngine
        ref={ref => {
          this.gameEngine = ref;
        }}
        style={styles.container}
        systems={[Physics]}
        entities={this.entities}
        running={this.state.running}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
