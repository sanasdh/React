import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import './ImageList.css'

 const ImageList=(props)=>{
  // const images = props.images.map(item=>{
  // return <img src={item.urls.regular} alt={item.description} key={item.id}/>
  // })
  // there is a way to not repeat the word "item" => restructure 3 properties we care about
  const images = props.images.map(image=>{
    return <ImageCard image={image} key={image.id}/>
    })
  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList
