import React from 'react'

const getSeason = (lat, month)=>{
  if (month>2 && month<9){
    return lat > 0? 'summer': 'winter'
  }
  else{
    return lat <0? 'summer': 'winter'
  }
};
const SeasonDisplay=(props)=>{
  const season =getSeason(props.lat, new Date().getMonth())
  const text = season==='winter'? 'Burr it is chilly!' : 'It is hot!'
  return(
    <div>
      <h1> {text} </h1>
    </div>
  )
}

export default SeasonDisplay;