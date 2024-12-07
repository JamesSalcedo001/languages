import './App.css'
// import { Button } from './components/Button'
// import { Card } from './components/Card.'
// import { Modal } from './components/Modal'
import { Navbar } from './components/Navbar'


function App() {


  // links for navbar

  const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
  ]



  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Showcase</h1>

      {/* Create Button component, passing string click me as prop named 'text' to the button component, and passing a callback function as a prop named 'onClick'. when button is clicked this function executes and shows alert with message 'Button Clicked!' */}

      {/* <Button text="Click Me" onClick={() => alert("Button Clicked!")} /> */}

      {/* Create Card component, passing string Card Title and This is card content as props named title and content to the card component */}

      {/* <Card title="Card Title" content="This is card content." /> */}

      {/* Create Modal component, passing string and a callback function as props. when button is clicked, this function executes and shows an alert with message Button Clicked */}

      {/* <Modal content="This is a modal" onClose={() => alert("Modal closed")} /> */}

      <Navbar links={links} />

    </div>
  )
}

export default App
