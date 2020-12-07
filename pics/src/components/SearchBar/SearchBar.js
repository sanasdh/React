import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  state={term: ''}
  // onInputChange(e){
  //   // e.target.value is what users typed in
  // }
  onFormSubmit= (e)=>{
    e.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term)
  }
  render(){
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
        <input type="text"
         value={this.state.term}
         onChange={(e)=> this.setState({term: e.target.value})} />
        </div>
        
      </form>
    </div>
  )
  }
}

export default SearchBar
