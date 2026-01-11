import { useState } from 'react'
import reactLogo from './assets/react.svg'
import gerberaImage from './assets/gerbera.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let tagline = "Todays fresh flowers for you!"
  let flower={
    name:"Gerbera",
    color:"Pink",
    price:50
  }

  return (
    <>
      
      <h1>Transflower Store</h1>
      
      <h3 className="read-the-docs">
        {tagline}
      </h3>
      <div>
        <h2>Featured Flower</h2>
        <p>Flower Name: {flower.name}</p>
        <p>Flower Color: {flower.color}</p>
        <p>Flower Price: ${flower.price}</p>
      </div>
      <img src={gerberaImage} className='logo react' alt='React logo'/>
      <ol>
        <li>Roses</li>
        <li>Tulips</li>
        <li>Daisies</li>
        <li>Sunflowers</li>
        <li>Orchids</li>
      </ol>
    </>
  )
}

export default App
