import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../../actions'
class SongList extends Component{

  renderList(){
    return this.props.songs.map(song=>(
      <div className="item" key={song.title}>
        <div className="right floated content">
        <button 
        onClick={()=>this.props.selectSong(song)}
        className="ui button primary">Select</button>
        </div>
        <div className="content">
        {song.title}
        </div>
      </div>
    )
)
  }
  render(){
    console.log(this.props)
    return(
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("here >>>>", state.selectedSong);
  return {songs:state.songs}
}
// the object that's returned from mapStateToProps is going to show up as props inside of our component

export default connect(mapStateToProps, {selectSong})(SongList);
//  connect()(SongList);, conncet is a function that is returning another function, and the second () is too invoke the second function
// connect function is going to take the selectSong action acreator and pass it into our component as a prop
// noticed we didin't just call selectSong function in our component, we passed it into connect function instead ->redux doesn't know which function is an action creator, we have to pass it in the dispatch function which return an action obj, when we pass our action creators in connect function, it will do a special operation on the function inside of this obj. ii looks at all the functions include inside this obj and it essentially wrap them up in another JS function, when we call the new JS function the connect function is going to automatically call action creater, take the action that gets returned and call the dispatch function for us!