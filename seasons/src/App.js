import React from 'react'
import SeasonDisplay from './SeasonDisplay'
class App extends React.Component {
  constructor(){
  }
  render(){
    window.navigator.geolocation.getCurrentPosition(position=> console.log(position),
    err=> console.log(err))
    return(
<div>

</div>
    )
  }
}

export default App;
