## What is the difference between Component and PureComponent? Give an example where it might break my app.
- A component is a piece of code used to render jsx and it will always re-render when its parent component re-renders. It doesn't rely on prop or state to change if the parent re-renders.
A PureComponent is used to skip re-renders unless a prop or state has changed. It does a shallow comparison between the new state and the previous state or props, which means that it compares references, if the reference is the same, it will treat it as if it didn't change and will not re-render. Therefore the app could break if you expect it to re-render and have a behavior triggered by his re-render.

## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
- It might be dangerous because shouldComponentUpdate only checks for props and state changes in the component and not for changes inside the context.

## Describe 3 ways to pass information from a component to its PARENT.
- The first way is to pass a callback function from a parent to its child, this callback function will have a prop that will come from the child when calling this function and then pass the information to the parent.
- The second way is to use useContext, therefore, the children components may consume the value from the context and pass information to the context value consumed.
- The third way I would say can be Redux, it works similarly to useContext, you have a store that wraps the whole app and when you update the state using the reducer function, you pass information from a child component to its parent.

## Give 2 ways to prevent components from re-rendering.
- useMemo and useCallback, both will help prevent component from re-rendering if used correctly, useMemo allows you to memoize a value and only re-render when the value from the dependency array change and useCallback is used to memoize a function, so if a function is being passed as props to the child component, if you wrap this function in a useCallback, it will not re-render unless the function changes.

## What is a fragment and why do we need it? Give an example where it might break my app.
- A fragment is a structure that is used to wrap multiple elements to avoid adding unnecessary node elements to the DOM, this way there are less node elements in the DOM improving the performance a little bit. An example of breaking the app could be when iterating an array and not passing the key prop to the fragment, React might lose track of the changes and then cause your app to break.

## Give 3 examples of the HOC pattern.
- The first example would be using a HOC to manage business logic and pass only the results down to the children components that will only consume this logic and only display it.
- The second example would be using a HOC as an error boundary.
- The third example would be using a HOC as a Theme provider.

Overall, a HOC is a function that takes in a Component as props and returns a new Component with improved functionality.

## What's the difference in handling exceptions in promises, callbacks and async...await.
- The difference in handling exceptions in promises, callbacks and async/await is that in promises, you handle these scenarios with a then, catch and finally, in callbacks, you can use nested functions that take the result of a function as arguments and handle this result, and async await you will handle the exceptions in a try catch block.

## How many arguments does setState take and why is it async.
- If I am not mistaken (I haven't used class components for a very long time), setState has 2 arguments, one is an object with the new value, and the second is an optional callback function that is called after the state update.
It is async because it is not executed immediately after being called, it will be batched and executed at the end of the current event loop. This way, if a setState is called many times one after the other, it will batch them all together and deal with it at the end and update the state once so it avoids unnecessary re-renders.

## List the steps needed to migrate a Class to Function Component.
- It depends on how the Class Component is set up. If it is just a simple component to render JSX, you just create a function that returns JSX, if the Class Component has state set in it, you would need to import useState from react and set the state inside the functional component. And lastly, if the Class Component has effects triggered by the component render, you would need to import the useEffect to handle it.
The summary of steps would be:
1- Change the definition of Class to function
2- Identify props and states and use the useState hook to define these states and add the props to the function
3- Replace the render method with a return statement
4- Remove the constructor method and replace certain lifecycle methods with the useEffect hook.
5- Remove non-functional methods because they will not be needed.

## List a few ways styles can be used with components.
1- Inline style
2- CSS Modules
3- Libraries that allow you to create components with the styles attached to them.
4- CSS Frameworks such as Material UI, Bootstrap or Tailwind
5- Stylesheets set globally in the app
6- className

## How to render an HTML string coming from the server.
- You can render an HTML string coming from the server by using dangerouslySetInnerHTML, this way you can use the string as elements, however this can be very risky because it's easy to inject malicious code in the application, so I recommend using this only if you know where the HTML is coming from.