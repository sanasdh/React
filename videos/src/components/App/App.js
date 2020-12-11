import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import youtube from '../../APIa/youtube'
import './App.css'
import VideoList from '../VideoList/VideoList'
import VideoDetail from '../VideoDetail/VideoDetail'
class App extends React.Component {
  state={
    selectVideo: null,
    videos:[],
  }
  onTermSubmit = async (searchTerm) =>{
console.log(searchTerm);
// preconfigured instance of axios
 const response = await youtube.get('/search',{
  params:{
    q:searchTerm  //youtube documentions asked to useq
  }
})
console.log(response.data.items);
this.setState({
  videos:response.data.items,
  selectVideo: response.data.items[0],
})
// this.onVideoSelect(response.data.items[0])
  }

  onVideoSelect = video =>{
    console.log("hhhh",video);
    this.setState({selectVideo:video})
  }
  componentDidMount(){
    this.onTermSubmit('cars')
  }
  render(){
  return (
    <div className="ui container">
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/* means use the 11 out of 16 columns to show the video detail */}
            <VideoDetail video={this.state.selectVideo} />
          </div>
          <div className="five wide column">
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
      </div>
      </div>
    </div>
  )
}
}

export default App;
