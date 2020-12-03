import './App.css';

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="data">
              Today at 6:00PM
            </span>
          </div>
          <div className="text">
            Nice blog Post!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
