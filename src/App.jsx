import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Landing/Form'
// import Form2 from './components/Landing/Form2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Form />
    {/* <Form2 /> */}
  </div>
  )
}

export default App
