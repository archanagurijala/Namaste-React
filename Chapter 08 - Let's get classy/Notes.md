Class based components - old way of creating components

Constructor will receive the props
why do we have super ? super(props): calling super(props) in the constructor ensures that the parent class's constructor is called, allowing your component to properly inherit its functionality and properties.
Importantly, you can’t use this in a constructor until after you’ve called the parent constructor.

this keyword has to be used inside class

receive props like this.props fromp arent component

loading a class based component - creating a new instance of the class

Never update state variables directly

state variables only updates the portion of the object when it needs to.

Parent Constructor => Parent render => Child Constructor => Child Render (Life cycle)

Constructor => render => ComponentDidMount - Mounting cycle

Parent Constructor => Parent render => Child Constructor => Child Render => Child ComponentDidMount => Parent ComponentDidMount

- Here the render of the parent will trigger the life cycle methods of Child and then come back.

Why do we make API calls inside componentDidMount?

- because the method is called once the component is rendered it will be called.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Parent Constructor
Parent render
first child contructor called
firstChild Render
second child contructor called
secondChild Render
firstChild DidMount
secondChild DidMount
firstChild Render
secondChild Render
UirstComponent Did Update
secondComponent Did Update

iafter setState react triggers the render component once again.

Never compare react class life cycle methods to functional components.

Page does not reload - power of SPA

componentWillMount - to clear setInterval, setTimeout mess in lifecycle methods
