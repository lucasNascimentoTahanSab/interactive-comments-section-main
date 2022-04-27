import './App.css'
import data from '../../data/data.json'
import UserContext from '../../Context/UserContext/UserContext.js'

function App() {
  return (
    <div className="App">
      <UserContext user={data.currentUser}>
      </UserContext>
    </div>
  )
}

export default App
