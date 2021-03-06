import React from 'react'

class SearchBar extends React.Component {
  state={search:"",}
  onFormSubmit=(e)=>{
    e.preventDefault()
    this.props.onTermSubmit(this.state.search)
    
  }

  render(){
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
        <label htmlFor=""></label>
        <input type="text" 
        value={this.state.search} 
        placeholder="Search for some videos.."
        onChange={e=>this.setState({search: e.target.value})}/>
        </div>
      </form>
    </div>
  )
}
}
export default SearchBar
