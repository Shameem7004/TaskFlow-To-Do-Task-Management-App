# TaskFlow

TaskFlow is a simple Expo React Native task manager for creating, filtering, completing, and deleting tasks. Tasks are saved locally with AsyncStorage, so they remain available after restarting the app.

## Features

- Add new tasks
- Mark tasks as completed or active
- Delete tasks
- Filter tasks by `All`, `Active`, or `Completed`
- Persist tasks locally using AsyncStorage
- Clean dark-themed mobile interface

## Tech Stack

- Expo
- React Native
- React
- AsyncStorage

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Expo Go app on your mobile device, or an Android/iOS simulator

### Installation

```bash
npm install
```

### Run the App

Start the Expo development server:

```bash
npm start
```

Then choose one of the available options in the Expo terminal:

- Scan the QR code with Expo Go
- Press `a` to open on Android
- Press `i` to open on iOS
- Press `w` to open in a web browser

You can also run platform-specific commands directly:

```bash
npm run android
npm run ios
npm run web
```

## Project Structure

```text
TaskFlow/
├── App.js
├── index.js
├── app.json
├── package.json
├── assets/
└── src/
    ├── components/
    │   ├── FilterBar.js
    │   ├── TaskInput.js
    │   └── TaskItem.js
    ├── context/
    │   └── TaskContext.js
    ├── screens/
    │   ├── CompletedScreen.js
    │   └── HomeScreen.js
    └── utils/
        └── storage.js
```

## Main Files

- `App.js` wraps the app with `TaskProvider` and renders the home screen.
- `src/context/TaskContext.js` manages task state, filters, and task actions.
- `src/utils/storage.js` saves and loads tasks from AsyncStorage.
- `src/components/TaskInput.js` handles creating new tasks.
- `src/components/FilterBar.js` switches between task filters.
- `src/components/TaskItem.js` displays each task with complete and delete actions.
- `src/screens/HomeScreen.js` renders the main TaskFlow interface.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start the app on Android |
| `npm run ios` | Start the app on iOS |
| `npm run web` | Start the app in a web browser |

## Data Storage

TaskFlow stores tasks under the `taskflow_tasks` key using `@react-native-async-storage/async-storage`.

Each task includes:

- `id`
- `text`
- `completed`
- `createdAt`

## License

This project is private and does not currently specify a license.
