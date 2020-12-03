import faker from 'faker'
import ComponentDetail from './ComponentDetail/ComponentDetail'
import ApprovalCard from './ApprovalCard/ApprovalCard'
function App() {
  let author="Alex"
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div><h4>warning!</h4>
        Are you sure?</div>
      </ApprovalCard>
      <ApprovalCard>
<ComponentDetail 
  author="Sam" 
  timeAgo="Today at 1" 
  commentTex="Nice blog Post!" 
  avatar={faker.image.image()} />
  </ApprovalCard>
  <ApprovalCard>
<ComponentDetail 
  author={author} 
  timeAgo="Today at 2" 
  commentTex="Nice blog" 
  avatar={faker.image.image()} />
  </ApprovalCard>
  <ApprovalCard>
<ComponentDetail 
  author="Sana" 
  timeAgo="Today at 10" 
  commentTex="Good blog Post!" 
  avatar={faker.image.image()} />
  </ApprovalCard>
    </div>
  );
}

export default App;
