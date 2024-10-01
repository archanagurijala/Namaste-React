import React from "react";
import ReactDOM from "react-dom/client";


const HeadComponent = ()  => <p>paragrah</p>;

/* React Element */
const spantag = <span> Span react element</span>
const subheading = (
  <h3 className="heading" tabIndex="1">
    {spantag} <br />
    Sub heading react Element
    <HeadComponent />
  </h3>
);


const number = 10;

/* Functional Component */
const Title = () => (
  <h1>Title Component</h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title></Title>
    <Title />
    {Title()}
    {subheading}
    <p>{number + 200}</p>
    <h2>Heading component</h2>
  </div>
);

// const HeaderComponent = () => (
//   <h1>HeaderComponent</h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// render Element
// root.render(heading)

//rendering Component
root.render(<HeadingComponent />);
