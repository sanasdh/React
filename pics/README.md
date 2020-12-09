# Intro
In this App, the user can search for anything. Then the app will look up the unsplash API and as a result shows pictures of that search

# Q&A
**Q:** Why don't we put () after the function inside out onChange property?

**A:** If we do so, it'll becaled whenever a component is rendered! But we want to call this function at some point in time in the futur, when the user is writting sth in the search bar. Without (), we're passing a ref to this function to the input element so that the input can call the function at some point in the future. But if you want to use the arrow function inside you jsx elemnt, you have to put () ... <form onSubmit={()=> this.onFormSubmit()}>. Now, whenever we are submitting the form, we call our arrow function and it executes whatever is afte =>. the form is only going to invoke the arrow funciton one time, now we have to make sure that we invole the "onFormSubmit", hence  we have to have () for our callback function.

**Q:** What is the difference between controlled and uncontrolled element?

**A:** In the controlled version we are using "setState". whenever we use setstate the component rerenders itself. and now we have saved our value inside the value property. the value porp will overwrite whatever text is inside the input. Controlled:
```js
 <input type="text"
         value={this.state.term}
         onChange={(e)=> this.setState({term: e.target.value})} /> 
```

But in the uncontrolled version we wouldn't know what the value of is input is, in any given time. for that we had to go to HTML DOM, and pull out the value. only when the callback function was called, React could know what the vlaue is. uncontrolled:
```js
 <input type="text" onChange={this.onInputChange} />
``` 
 
**Q:** forEach vs map method? 
 
**A:** The forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

**Q:** What is key exactly?

**A:** Key helps React to be more percise, it's easier for it to track the components and elemnts in dom and deside which one needs an update. every item is eventually going to be rendered as a html tag, we try to use a value for this key that corresponds to one distinct element in the array of eements we are iterating over-> it's convineint to use the id. we only have to assign the key to the root element that we are returning from a list of records. Examples:
```js
<img src="" alt="" key={item.id}/>
``` 
OR
```js
<div key={id}>
  <img src="" alt=""/>
</div>
``` 
**Q:** Ref (in react) vs DOM and querySelectors in Vanila JS?

**A:** React refs are a systems to give you direct access to a single dom element that is rendered by component. We use it insted of, document.querySelector. We have to define our constructor function and call a function inside of it to create a reference and assign it as an instance variable on our class, then paa to a particular JSX element as props