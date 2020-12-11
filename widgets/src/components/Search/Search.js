import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm]= useState('')
  const [results, setResults] = useState([])
  console.log(results);
  useEffect(()=>{
    const search = async () =>{
      // we'll get data = {query:{}, ..}
     const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params:{
          action: "query",
          list: "search",
          origin:'*',
          srsearch: term, //what we search for
          format: "json"
        },
      })
      setResults(data.query.search)
    }
    if(term && !results.length){
      search()
    }else{
    const timeoutId = setTimeout(()=>{
      if(term){
    search()}
    },500)
    console.log("here");
    return () => {
      clearTimeout(timeoutId)
    }
  }


  }, [term])

const renderedResults = results.map((result)=>{
  return(
    <div className="item" key={result.pageid}>
      <div className="right floated content">
        <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
      </div>
            <div className="content">
        <div className="header">
        {result.title}
        </div>
        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        {/* the on;y time we aare using dangerouslySetInnerHTML is, we are really confident the person who is providing this html is someone that we can trust */}
        {/* {result.snippet} */}
        {/* we need to reneder result.snippet's content as an html elemnt ->*/}
      </div>
    </div>
  )
})
  return (
    <div>
      <div className="form ui">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input type="text" 
          className="iput"
          value={term}
          onChange={e => setTerm(e.target.value)}
          />
        </div>

      </div>
        {renderedResults}
    </div>
  )
}

export default Search
