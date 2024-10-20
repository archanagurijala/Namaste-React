The code which tests our application for evry single code change.
Three types of testing (developer):

- Unit testing : React components are tested in isolation for specific unit(component) of the application
- Integration Testing : Tseting the integration of the component. Multiple components are talking to each other.
- End to End (e2e) testing : requires different types of tools like selenium,

React Testing Library

- Legacy: DOM testing library : Base for all the libraries under it.
- The have other framework libraries as well like Angular Testing library.

React testing library uses jest (behind the scenes) - a testing library ( standard testing framework)

The configuration done with babel for react testing jest with alter the existing config - conflict

jsDOM
The test cases need a runtime environment to run. we use jsDOM.
kind of like a browser.

npm install --save-dev jest-environment-jsdom

creating a folder with name **tests** will be considered as test files
ALl below files are considered as test files

- .test.js
- .spec.js
- .test.ts
- .spec.ts

underscore at the front and back is called dunder tests

test(string, callback function)

render(jsx component) - render the compoent on js DOM

//Querying
screen.method() - find the screen by the method

- getByRole - find the elements in the component
- getByText - text name of form elements.
- getBy - one result
- getAllBy .. - multiple elements matching query
- the value from screen.methiod() returns an object is an jsx react elements/react fibre elements.

//assertion
expect(value).method(); - searching the heading to be in the document or not (toBeInTheDocument)
expect(value).not.method() - ! of something

babel preset is helping the react code to be converted to javascript.

Grouping similar test cases into single block - describe
describe(string, callback function)
multiple describe can be written
nested level of describe
test alias it - both are same
naming convention start with should

fireEvent.method()

Integrating Testing - for multiple components.

npm run watch test

act is a callback function returns a promise & comes from react dom utils

helper functions:

    beforeAll - Before test cases run

    beforeEach test case: it runs before each test case

    afterAll - after all the test cases are completed

    afterEach - after each test case is executed
