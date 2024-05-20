

import './App.css'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'
import Person from './Components/Person'

function App() {
  
  function sayHello(){
    console.log("Hello from button!")

  }

  


  return (
    <>
      <Header title="This is from Title component"/>
      <Person name="Anuj" age="20" />
      <Button text="Click me" onClick={sayHello} />
      <List items={["one", "two", "three", "four"]} />
    </>
  )
}

export default App
