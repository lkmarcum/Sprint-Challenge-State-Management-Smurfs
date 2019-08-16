1. What problem does the context API help solve?

Context API allows us to hold our state in a central location and disperse it to components as needed, avoiding excessive prop drilling and unpredictability when managing state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds the state and gives components access to it. Reducers hold the logic for updating state. Actions are essentially function calls that can dispatch a call to the reducer to update the state in a specific way depending on the type of the dispatch.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the overarching data that influences the application as a whole. Component state holds data that is specific only to one component. The latter could be used to hold a "newUser" value that will later be passed into a reducer to update the application state but on its own has no particular influence on the application or how it is rendered.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to run asynchronous actions like axios calls. These async functions would not be allowed without middleware like thunk.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Async Redux is by far my favorite system. It combines all the advantages of Context API and the reducer pattern while also allowing for asynchronous actions.
