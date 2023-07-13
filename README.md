# The Dodge Game - originally developed by Lewpen

The Lewpen Dodge game is a classic. The point of the game is to see how a player handles stress and navigates a tricky landscape of obstacles while staying focused on goal. 

Since Lewpen pulled the game off their site, I decided to re-write it in React Native for mobile playing purpose. This game can be compiled for both Android and iOS natively. Fork away. :) 

## Rules of the game: 
Objective: The main objective of Dodge is to score as many points as possible by making your blue circle collide with the blue box.

Movement: You can move the blue circle by dragging it across the screen with your finger. The circle will follow the movement of your finger.

Scoring: Each time the blue circle collides with the blue box, you earn 10 points. When this happens, the blue box will randomly reposition itself somewhere else on the screen.

Avoid the Red Balls: While you are chasing the blue box, you need to avoid colliding with the red balls. These balls bounce around the screen and if they collide with the blue circle, you will lose 5 points.

Increasing Difficulty: Every time the blue circle collides with the blue box, a new red ball is added to the screen, increasing the difficulty of the game. This continues until there are a maximum of 10 red balls on the screen.

Haptic Feedback: When the blue circle collides with a red ball, your phone will vibrate briefly and the screen will flash red for a moment to signify the collision and point loss.

Continuous Play: The game continues indefinitely, or until you decide to stop playing. The goal is to score as high as possible without losing too many points to red ball collisions.

## Sample Game Play

https://github.com/alexdni/TheDodgeGame/assets/13934326/e13b8221-9d8a-4324-854a-5d23559f0a39

## Compiled Binary
Download the APK [here](https://drive.google.com/file/d/1N3Xgtjqzp6JsBiYygjqObwOyoH3N9Mj8/view?usp=sharing).

## Step 1: Build the project

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

First, you will need to build the project:

```bash
# using npm
yarn install
```

## Step 2: Start your Application

Then you can run the app

### For Android

```bash
# Using Yarn
yarn android
```

### For iOS

```bash
# Using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:
