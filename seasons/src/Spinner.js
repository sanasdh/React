import React from 'react'

function Spinner(props) {
  return (
    // <div className="loaderDisplay ui segment">
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  )
}
Spinner.defaultProps = {
message: 'Loading ... '
};

export default Spinner
