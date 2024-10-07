Monolith: 

Microservice Architecture : different services for different systems.

Separation of concerns/Single responsibility principle
 - Every micro service has its own architecture
 - They run on their respective ports; All are then mapped to doamin name; Then the services are deployed on same url
 - Interation between them is through the url  like /api

 React 
     Loads => Render => API => re-render
     _ Better UI experience
     - Faster Render Mechanism

useEffect(callback function, dependency array)
 - The callback function is called after the component is rendered.

 Conditional rendering : redering the component based on condition

 React rerenders the component when the change in state happens.

 When local state variable changes/updates React triggers a reconcialtion cycle /rerenders the component.