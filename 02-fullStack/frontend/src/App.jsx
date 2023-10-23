import { useEffect, useState } from 'react'
import axios from "axios" // axios library used to consume api request jokes
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])  // recieving jokes

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    }
    )
    .catch((Error) => {
      console.log(Error);
    }
    )
  })


  return (
    <>
      <h1>Sita Ram</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>

          </div>
        ))
      }
    </>
  )
}

export default App
