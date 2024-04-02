// Identifying components in wireframe
// - Beer display
// - Beer card
// - Sidebar
//  - Search bar
//  - Filter selection

import BeerDisplay from './Components/BeerDisplay/BeerDisplay'
import Sidebar from './Components/Sidebar/Sidebar'
import { ChangeEvent, useState } from 'react'
import './App.scss'

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filter, setFilter] = useState({})

  const handleSearch = (event: ChangeEvent) => {
    const userInput = event.currentTarget as HTMLInputElement
    setSearchTerm(userInput.value)
  }

  const handleFilter = (event: ChangeEvent) => {

  }

  return (
      <main>
        <Sidebar handleFilter={handleFilter} handleSearch={handleSearch} />
        <BeerDisplay searchTerm={searchTerm} filter={filter} />
      </main>
  )
}

export default App
