import { useState } from 'react'
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Navbar, Button, CardBody, CardHeader, Card } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card className='col-md-2'>
        <CardHeader className='h5'>Title</CardHeader>
        <CardBody>Content</CardBody>
    </Card>
    </>
  )
}

export default App
