# Intorduction to Hooks

* The point of this project, is for me, to practice the fundementals of Hooks.

* useState is a hook that gives us access to state inside of a functional component `const [state, setState] = useState(initialState)` . The left handside of this code isn't creating an array. Whenever we call useState, we'll get back an array with 2 elements inside of it and we are assigining them to state, and setState. "state" is a ref to some variable/value that's going to change over the time. "setState" is a function we call to update our piece of our state. and like in class components, when ever we're calling the setState function, it'll cuz our component to rerender.

* useEffect, needs 2 arg, first one is alwyas a function. 2nd arg controls when we want our code to be executed. 
1. [] -> When the components is rendered for the first time only
2. No array at all -> When the component is rendered for the first time and whenever it rerenders
3. [someTerm(s)] -> When the component is rendered for the first time and (whenever it rerenders and some piece of data(someTerm(s)) has changed)

* We are not allowed to mark the function that we are passing into useEffect => we can't mark it as async and use any await keywords directly. we have 3 slns to get around thes: 
1. (Recommended) Use a helper function inside of the useEffect and mark that with async => making temporarly variable and calling it right after :
```js
useEffect(()=>{
  const search =async ()=>{
    await axios.get('')
  }
  search() //to invoke it
})
```
2. Remove temporarly variable and wrap it in ()and right after it, open another set of () to invoke it=> this defines the function and immediately calls it :
```js
useEffect(()=>{
  (async ()=>{
    await axios.get('')
  })()
})
```
3. Revert back to using normal promises
```js
useEffect(()=>{
    axios.get('').then((response)=>{
      console.log(response.data)
    })
})
```

* Whenever we're calling a setTimeout, we'll make an id specific to that setTImeout as well. We can then store that id and clear the setTimeout