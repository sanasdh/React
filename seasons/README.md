# Notes
* State is a JS obj that contains data relevant to a component
* Updating States we'll rerender the component
* State can only be updates using the function 'setState'
* It's better to not do the data loading in constructor method. Instead do it with componentDidMount, for more clearer code!
* ``` state ={ key: value} ``` is almost equal to ``` constructor (props){this.state={ley:value}}``` Babel works behind the scene. You can try it here: https://babeljs.io/
}

# QA
**Q:** What is "extends React.Component" exactly?

**A:** When we make a class we're creating a new class inside JS that has just one method assigned to it -> render() method. In order to use a class based component with react however, react expects that our class based component has many other methods attached to it. We follow thes other methods from other class called React Component => It allows us to pull a ton of built in functionality from this (we are sub classing react.component)

**Q:** What is super(props)?

**A:**  App is extending functionality fro react component(base class). this base class has a constructor oh its own! when we define a constructor inside our app class, we are essentially overriding the constructor function that is inside our base class. but we still want to make sure that all the set up code inside of this thing's constructor function still gets called! => super is the refrence to the paren'ts constructor function