
import './App.css'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import UserContextProvider from './context/UserContextProvider'
import { useState  } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
     <h1>React aur chai</h1>
     <Login/>
     <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
