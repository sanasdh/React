import React, {Component} from 'react'
import {connect} from 'react-redux'

class SongList extends Component{

  render(){
    return(
      <div>hi</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {songs:state.songs}
}
// the object that's returned from mapStateToProps is going to show up as props inside of our component

export default connect(mapStateToProps)(SongList);
//  connect()(SongList);, conncet is a function that is returning another function, and the second () is too invoke the second function