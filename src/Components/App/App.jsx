import './App.css'
import data from '../../data/data.json'
import UserContext from '../../Context/UserContext/UserContext.js'

function App() {
  return (
    <div className="App">
      <UserContext.Provider user={data.currentUser}>
      </UserContext.Provider>
    </div>
  )
}

export default App
