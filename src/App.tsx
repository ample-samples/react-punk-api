// Identifying components in wireframe
// - Beer display
// - Beer card
// - Sidebar
//  - Search bar
//  - Filter selection

import BeerDisplay from './Components/BeerDisplay/BeerDisplay'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.scss'

function App() {

  return (
      <main>
        <Sidebar />
        <BeerDisplay />
      </main>
  )
}

export default App
