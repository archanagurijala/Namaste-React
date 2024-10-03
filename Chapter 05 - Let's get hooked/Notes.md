* React makes developer coding experience easy and optimises.


/**
 *
 * Header
 *  - logo
 *  - Menu Items
 *
 * Body
 *   - search
 *   - Restro container
 *      - Restro card
 *
 * Footer
 *   - copyright
 *   - links
 *
 *
 */

 # File Structure 
  react.org
    - Components in one folder

* Never keep hardcoded data in components.

# Two ways of exports:
    - default export : export default name
    - named export : single file to export multiple exports.

can we have two exports on single component?


when we want to keep UI layer is in sync with data layer - React comes in picture

# React Hooks 
    normal JS utility functions. writted by FB developers inside the React 
        - useState() : generate super powerful state variables in react. Maintains the state of the component.
        - useEffect()

* whenever a state variable updates React re-renders the component.

# Reconcialation Algorithm (React Fiber) acdlite/gitlab
 React creates a virtual DOM (Object representation of actual DOM).
 New way of finding it and updating the DOM.
 Diff Alogithm : finds out the difference between actual & virtual DOM. Then it updates DOM on every render cycle.
 
 
 # React is doing efficient DOM manipulation because it has virtual DOM. Hence it is powerful UI library.
 

