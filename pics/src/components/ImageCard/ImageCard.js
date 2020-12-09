import React from 'react'

 class ImageCard extends React.Component {
      constructor(props){
      super(props);
      this.state={
        spans:0,
      }
     this.imageRef = React.createRef();
   }
   componentDidMount(){
    //  if we want to get the img height directly we'll face an issue. sine we are trying to get the height before the img loads. so now we have the add an event listener , and get the heught as a callback function of this event
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  setSpans = () =>{
    const height= this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10)
    // 10 is the height of each row 
    this.setState({spans})
  }
  render(){
    const{description, urls} = this.props.image
    return (
    <div style={{gridRowEnd:`span ${this.state.spans}`}}>
      <img 
    ref={this.imageRef}
    src={urls.regular} 
    alt={description}/>
      
    </div>
  )
}
 }

export default ImageCard;