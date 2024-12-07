import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Showcase</h1>

      {/* Create Button component, passing string click me as prop named 'text' to the button component, and passing a callback function as a prop named 'onClick'. when button is clicked this function executes and shows alert with message 'Button Clicked!' */}

      <Button text="Click Me" onClick={() => alert("Button Clicked!")} />
        
    </div>
  )
}

export default App
