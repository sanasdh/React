import React from 'react'
import axios from 'axios'
import SearchBar from '../SearchBar/SearchBar'
const CLIENTID = process.env.CLIENTID;
class App extends React.Component {
 
    // https://unsplash.com/documentation#search-photos
    // the get request will get 2 args. first the address that we want to make a request to (root url+end point), 2nd arg is an obj that will have a bunch of options that will customize this request
    // params specifies the different query string parameters we want to add into this request
    // in Network tab, we'll see 2 request: one is CORS -> referred to as a cross origin research. we want the one with the method of get
    // it's an asynchronous request, it takes axios some amount of time to reach out to splash and then get a response back
    // axios return an object called promise, a promise is a obj that'll give us a notification when some amount of work like a network request is completed. in order to get the notification we'll chanin .then() function and we'll pass (arrow) function to .then, and the arrow function we'll be called at some point in the future => the arrow function, is a callback,  which will be invoked with whatever data we get back from the API 
    // we have 2 methods to get the data and work with it, .then is one of then, the second methos is using "async" and await
// axios.get('https://api.unsplash.com/search/photos',{
// params:{query: term},
// headers:{
//   Authorization: 'Client-ID 3t4hDeyUY3F-6dJDl0IbwIkZU1lkEQ0Vakdb84oo6Cs'
//   }
// }).then(response =>{
//   console.log(response.data.results)
// })
async onSearchSubmit(term){
const response = await axios.get('https://api.unsplash.com/search/photos',{
params:{query: term},
headers:{
  Authorization: CLIENTID
  }
})
  }
  render(){
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
  )
}
}
export default App
