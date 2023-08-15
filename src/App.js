import {Square} from './components/Square/Square'
import './App.css';

function App() {
  // ! This is JavaScript
  const propVariable = 'This is a prop'


  return (
      <Square propVar={propVariable}/>
  );
}

export default App;
