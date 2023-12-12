This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@Expo`](https://docs.expo.dev/).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://docs.expo.dev/get-started/installation/) instructions, before proceeding.
 
## Download the app repo

```bash
git clone https://github.com/AbdelhalimAhmed/WeatherApp
```

## Install dependencies then start the Development Server

run the following commands from the _root_ of WeatherApp project:

```bash
npm install

npx expo start
```

# Completed tasks
1. Set up React-Navigation to manage navigation.
2. Created a Search input component.
3. Developed a Weather Info screen.
4. Incorporated react-query for handling API requests due to its current popularity and ease of use. For more details, refer to the documentation: [React Query Overview](https://tanstack.com/query/latest/docs/react/overview). Note: There might be a warning when running 'yarn jest' related to 'react-query'. This is likely due to the absence of mocking, and it should be straightforward to resolve by adopting this package.
5. Implemented unit and snapshot testing for enhanced code reliability.

# Folder Structure
Below is the considered folder structure for this project.

```
root-project/
|- assets -> Contains all static assets like "Images" maybe add "font" beyond.
|- src/
  |- api -> Contains all api utils like (requests - error handling....)
  |- attributes -> Contains all constants attributes such as Colors, FontStyle, Spacing,... ".
  |- components -> Contains all reusable UI components.
  |- navigation -> Contains all configuration of navigation.
  |- screens -> Contains all pages/screens with their logic.
  |- utils -> Contains all utility functions like "customHooks"
```

# Demo


