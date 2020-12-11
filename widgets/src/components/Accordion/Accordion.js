import React, {useState} from 'react'

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const onTitleClick = (index) => {
    console.log('clicked', index)
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) =>{
    return (
    <React.Fragment key={item.title}>
      <div className={(index==activeIndex)?"title active":"title"}
      onClick={()=> onTitleClick(index)}>
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={(index==activeIndex)?"content active":"content"}>
        {item.content}
      </div>
    </React.Fragment>)
  })
  return (
    <div className=" ui styled accordion">
      {renderedItems}
    </div>
  )
}

export default Accordion
