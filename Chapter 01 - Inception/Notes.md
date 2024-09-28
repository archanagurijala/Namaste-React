React is build using Javascript. A Javascript library

Why do we use two files in React?
    React.dev     - build for core react algorithm
    ReactDOM.dev  - React DOM for modifying DOM Manipulations
                    A bridge that connects to DOM

React as a library reduces the expensive DOM Manipulations

React.createElement is an object

order of the react files matter? -YES

h1 tags value will be replaced not appended by render method

React can be applied to small portion of the page hence is a library. works independently in small portion of an app.

crossorigin : CORS (cross-origin resource sharing) is an HTTP feature that enables a web application running under one domain to access resources in another domain. In order to reduce the possibility of cross-site scripting attacks, all modern web browsers implement a security restriction known as same-origin policy.
In ReactJS, Cross-Origin Resource Sharing or CORS requests refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.

CDN : As is the case with content delivery networks, a React CDN combination reduces the distance between the server and the user to accelerate the delivery of library assets so that webpages would load faster.

async: Async allows your script to run as soon as it's loaded, without blocking other elements on the page. It is a good choice for scripts that do not need to interact with the DOM, such as scripts that load images or videos

defer: Defer means your script will only execute after the page has finished loading. It is a good choice for scripts that need to interact with the DOM, such as scripts that initialize widgets or add event listeners.