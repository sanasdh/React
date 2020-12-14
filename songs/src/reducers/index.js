import {combineReducers} from 'redux'


// this has static list of songs(array) => no arg is needed, we don't need to look at any actions because we never expect to change it
const songsReducer =()=>{
return [
  {title: 'Watermelon sugar',
  singer: 'Harry Styles',
  duration: '3:05' },
  {title: 'Diamonds',
  singer: 'Sam Smith',
  duration: '3:46'},
  {title: 'Levitating',
  singer: 'Dua Lipa',
  duration: '3:15' },
]
}

const selectedSongReducer =(selectedSong=null,action)=>{
  if(action.type==='SONG_SELECTED'){
    return selectedSong=action.payload
  }
  return selectedSong
}


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})