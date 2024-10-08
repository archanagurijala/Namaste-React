useEffect without dependency array - everytime the comonent is call, rendered and useeffect is called everytime
useEffect with [] dependency  -> useEffect only aclled on initial render and just once.
useEffect with [stateVariable] depdency -> is called eveytime the state changes.

useState is always called inside the component at the higher level. It is used for creating local state variables.
useState cannot be used inside conditional statements and also inside functions.

Routing configuration
    First import createBrowserRouter
    then creatte a list of array of objects with path & element
    import a router provider and render the router object




rafce - auto generates the componet in vs code