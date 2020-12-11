import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import DropDown from './components/DropDown/DropDown';
import Search from './components/Search/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  },
]

const options=[
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
]
const App =()=> {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <DropDown 
      selected={selected}
      onSelectedChange={setSelected}
      options={options} />
    </div>
  );
}

export default App;
