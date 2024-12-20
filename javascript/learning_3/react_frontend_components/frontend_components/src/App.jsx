import './App.css'
// import { Button } from './components/Button'
// import { Card } from './components/Card.'
// import { Modal } from './components/Modal'
// import { Navbar } from './components/Navbar'
// import { List } from "./components/List"
import { Dropdown } from './components/Dropdown';

function App() {


  // array of objects, each representing a link for the nav bar, text being the content, and href being the URL the link navigates to when clicked

  // const links = [
  //   { text: "Home", href: "/" },
  //   { text: "About", href: "/about" },
  //   { text: "Contact", href: "/contact" }
  // ]



  // array of list items for list component

  // const listItems = ["Item 1", "Item 2", "Item 3"];




  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];



  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Showcase</h1>

      {/* Create Button component, passing string click me as prop named 'text' to the button component, and passing a callback function as a prop named 'onClick'. when button is clicked this function executes and shows alert with message 'Button Clicked!' */}

      {/* <Button text="Click Me" onClick={() => alert("Button Clicked!")} /> */}



      {/* Create Card component, passing string Card Title and This is card content as props named title and content to the card component */}

      {/* <Card title="Card Title" content="This is card content." /> */}



      {/* Create Modal component, passing string and a callback function as props. when button is clicked, this function executes and shows an alert with message Button Clicked */}

      {/* <Modal content="This is a modal" onClose={() => alert("Modal closed")} /> */}



      {/* passing links array of objects down to Navbar component as props for dynamic rendering */}

      {/* <Navbar links={links} /> */}



      {/* passing list array and ordered=true down to List component as props for dynamic rendering */}

      {/* <List items={listItems} ordered={true} /> */}
      

      <Dropdown options={dropdownOptions} onChange={(value) => alert(`Selected: ${value}`)} />

    </div>
  )
}

export default App
