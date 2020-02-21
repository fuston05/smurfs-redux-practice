1. What problem does the context API help solve?

  The problem that Context API helps solve is known as ‘prop-drilling’. Context API allows us to pass props to nested components without having to pass them down through components that don’t need the props in order to reach the ones that do.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  In a Redux ‘Actions’ are just that, actions. Actions define what will happen to our data typically based on some user input or button click. Reducers can be thought of as the engine that drives the application. Actions are sent to the reducer and the reducer executes the actions based on what ‘action’ was sent to it. The ‘store’ is an object that contains our state,  represents everything that changes in our application,  as well as a few methods. This is why the store is known as the ‘single source of truth’ since all of our application state lives there.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is any state that is used throughout our application.  I also think of ‘application state’ as the current state of our application as a whole. Component state is any state that is only used within an isolated part of our application. This could be a single component such as a form, or maybe a single small component tree. A form input’s 2-way binding is a great example of when we would use ‘component state’. As for application state, a good time to use this would be like when we want to display a users name in a header throughout our application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is 'middleware' that changes our action creators by making us have to call the dispatch method manually. It acts as middleman or maybe a filter between our actions and the redux store. It makes sure that we are ending the correct data type to the reducers.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  My favorite state management system is Redux. I like redux because of the control it gives us over our application state. It takes a bit to set it up, but once it’s up it makes the whole development process much much easier because all of our state is just right there to be used anywhere at any time. 
