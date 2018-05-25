# BroccoliCo Coding Test

I've written this code challenge using react/redux. I have decided to use reduxForms for the form component as it adds flexability with breaking up input types and having state management for your form props is really useful.

I have used Webpack as a task manager which incorporates css modules, hot reloading and sass to name a few. I used the bones of create react app just for the webpack setup and start up files mainly because I like the way they handle all the logging in the terminal and it
already includes a lot of the loaders and plugins I would need. I have made my own changes to this for sass support and have removed anything that isn't needed.

## How to use
To use the app follow the simple step below.

1. Firstly make sure you have node/npm and yarn installed on your system. If you need to do this follow the links below:

[Node/Npm](https://nodejs.org/en/)
[Yarn](https://yarnpkg.com/en/docs/install)

2. Run `yarn install` in your command line.
3. Run `yarn start` in your command line to open the app in your browser pointing to http://localhost:3000/.
4. Run `yarn build` in your command line build a production react build folder with the compiled app.

## Testing
For my testing framework I have used jest and enzyme so I can do shallow rendering of the components. I generally try to test
anything that will alter the props passed into the components. This can be testing action and basic functions to check the
desired result is as expected.

To run the tests follow the steps below:

1. Run `yarn test` to run the test suite in the command line.
2. Run `yarn run test-coverage` to build the jest code coverage tool. To view the results just visit http://localhost:3000/coverage/lcov-report/

## Bundle Analyzer
I have included a bundle analyzer when doing a build.
To view the bundle analysis in then just go to the bundle-report.html file in the build folder.
