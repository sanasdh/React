import React from 'react'
import {selectSong} from '../../actions'
import SongDetail from '../SongDetail/SongDetail';
import SongList from '../SongList/SongList';
import './App.css';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
        <SongDetail />
        </div>
      </div>
      
    </div>
  )
}

export default App
