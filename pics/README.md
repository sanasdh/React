**Q:** Why don't we put () after the function inside out onChange property?

**A:** If we do so, it'll becaled whenever a component is rendered! But we want to call this function at some point in time in the futur, when the user is writting sth in the search bar. Without (), we're passing a ref to this function to the input element so that the input can call the function at some point in the future. But if you want to use the arrow function inside you jsx elemnt, you have to put () ... <form onSubmit={()=> this.onFormSubmit()}>. Now, whenever we are submitting the form, we call our arrow function and it executes whatever is afte =>. the form is only going to invoke the arrow funciton one time, now we have to make sure that we invole the "onFormSubmit", hence  we have to have () for our callback function.

**Q:** What is the difference between controlled and uncontrolled element?

**A:** In the controlled version we are using "setState". whenever we use setstate the component rerenders itself. and now we have saved our value inside the value property. the value porp will overwrite whatever text is inside the input. Controlled:
``` <input type="text"
         value={this.state.term}
         onChange={(e)=> this.setState({term: e.target.value})} /> ```

But in the uncontrolled version we wouldn't know what the value of is input is, in any given time. for that we had to go to HTML DOM, and pull out the value. only when the callback function was called, React could know what the vlaue is. uncontrolled:
``` <input type="text" onChange={this.onInputChange} />``` 
