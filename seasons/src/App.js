import React from 'react'
// import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from './SeasonDisplay'
class App extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      lat:null,
      errMsg:'',
    }
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=> this.setState({lat:position.coords.latitude}),
    err=> this.setState({errMsg:err.message})
  );
  }
  render(){
if(this.state.errMsg && !this.state.lat){
  return(
    <div>
    Error: {this.state.errMsg}
    </div>
        )
} else if(!this.state.errMsg && this.state.lat){
  return(
    <div>
<SeasonDisplay lat={this.state.lat}/>
    </div>
        )
}
return <div> Loading</div>
  }
}

export default App;
