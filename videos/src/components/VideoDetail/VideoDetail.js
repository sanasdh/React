import React from 'react'
import Loader from '../Loader/Loader'
import './VideoDetail.css'
const VideoDetail = ({video}) => {
  if(!video){
    return ( <div className="loader-video">
      <Loader />
    </div>
    
    )
  }

  // const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="video player"/>
       
      </div>
      <div className="ui segment">
      <h4 className="uiheader"> {video.snippet.title} 
        </h4>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <p>{video.snippet.description}</p>

        </div>
    </div>
  )
}

export default VideoDetail
