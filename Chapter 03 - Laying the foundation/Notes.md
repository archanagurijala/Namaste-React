npx parcel index.html - dev build is created and hosted on server
create scripts to skip above command for dev and prod respectively in package.json
    parcel index.html -> npm run start/npm start (start here is name of the key of the script and it's value is stored)
    npx parcel build index.html -> npm run build 

React Element is not HTML element. It is an object and when rendered on DOM it becomes a HTML element.

React developed JSX for easy development.

JSX is not HTML/XML inside Javascript or React. It is HTML-like or XML-like syntax.

JS Engine does not understand JSX. It understand Ecmascript 

JSX is transpiled before it is received by JS Engine. This job is done by bundler (Parcel) using package called babel.

React.createElement => JS Object => rendered as HTML element.

JSX => Transpiled to React.createElement and so on..

Attributes to JSX uses camel case.

JSX needs to be wrapped inside small braces when written in multiple lines.

Everything is a component in React. 

Two types of components in React:
    - class-based components
    - functional components

React functional component is just a normal javascript function which returns some JSX code.
 -  camel case component name
 -  rendered as tag

 Component Composition: Component inside another component
 
 Any Javascript expresion can be used in inside a component using {}

React Element inside react element {}
react element inside react functional component - {}

cross-site scripting : Attacker sending some malicious data = > JSX takes care of this attack, it is sanitizing the data and uses it.

babeljs.io



