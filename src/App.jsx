import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import ResidentInfo from './Components/ResidentInfo'
import Info from './Components/Info'
import Banner from './Components/Banner'

function App() {
  const [location, setLocation] = useState({})
  const [searchValue, setSearchValue] = useState ("")
  


  useEffect(() => {
    const randNumb = Math.floor(Math.random()*126) 
    axios.get(`https://rickandmortyapi.com/api/location/${randNumb}`)
      .then((res) => setLocation(res.data))
  }, [])

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setLocation(res.data))
  }
  
  console.log(location)

  return (
    <div className="App">
      <div className="wrapper">

      <Banner/>
      <div className="searchBar">
        <input 
          type="text" 
          value={searchValue} 
          onChange = {(e) => setSearchValue(e.target.value)}
          placeholder = 'type a location ID'
        />
        
      
        <button onClick={searchLocation}> Go</button>
      </div>

      <Info location={location}/>

      <section >
      <ul className='character-grid'>
        {location.residents?.map(residents => (
          <li key={residents}>
            <ResidentInfo residents={residents} />
          </li>
        ))}
      </ul>
      </section>
      </div>

    </div>
  )
}

export default App
