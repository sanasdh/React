import React from 'react'
import './SeasonDisplay.css'

const seasonConfig={
  summer:{
    text: 'It is hot! ',
    icon:'sun',
  },
  winter:{
    text: 'Burr it is chilly!',
    icon: 'snowflake',
  }
}
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
  // seasonConfig[season]
  return(
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${seasonConfig[season].icon} icon`} ></i>
      <h1> {seasonConfig[season].text} </h1>
      <i className={`icon-right massive ${seasonConfig[season].icon} icon`} ></i>
    </div>
  )
}

export default SeasonDisplay;