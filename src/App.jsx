import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title})=>{
  return (
    <div className='card' style={{border:"1px solid #4b5362",
      padding:"20px",margin:"10px",backgroundColor:"#31363f",
      borderRadius:"10px",minHeight:'100px'
    }}>
      <h2>{title}</h2>
    </div>
  )
}

const App = ()=>{
  const [] = useState()
    return ( 
      <div className='card-container'>
        <h2> functional arrow component</h2>
        <Card title="star wars" />
        <Card title="lion king"/>
        <Card title="cars"/>
      </div>
    )
}

export default App
