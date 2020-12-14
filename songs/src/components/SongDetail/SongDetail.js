import React from 'react'
import {connect} from 'react-redux'
const SongDetail = ({song}) => {
  if(song){
  return (
    <div>
      <h3>Details for:</h3>
      <p>
      Title: {song.title} <br />
      Singer: {song.singer} <br />
      Duration: {song.duration} <br />
      </p> 
    </div>
  )
  }
  return <h3>Select A song!</h3>
}
// we want to wrap the songDetail with the connect component so that we can get some information out of our redux stoe.
const mapStateToProps = (state) => {
  // our entire state obj => look at combineReducers function, the keys on this obj id the keys inside of our state obj
  console.log("here >>>>", state.selectedSong);
  return {song:state.selectedSong} //name of the key can be anything
}

export default connect(mapStateToProps)(SongDetail);
