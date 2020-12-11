# Intorduction to Hooks

* The point of this project, is for me, to practice the fundementals of Hooks.

* useState is a hook that gives us access to state inside of a functional component `const [state, setState] = useState(initialState)` . The left handside of this code isn't creating an array. Whenever we call useState, we'll get back an array with 2 elements inside of it and we are assigining them to state, and setState. "state" is a ref to some variable/value that's going to change over the time. "setState" is a function we call to update our piece of our state. and like in class components, when ever we're calling the setState function, it'll cuz our component to rerender