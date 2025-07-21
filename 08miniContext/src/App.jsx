
// import './App.css'
// import Login from './components/Login '
// import Profile from './components/Profile'
// import UserContextProvider from './context/UserContextProvider'

// function App() {


//   return (
//     <UserContext.Provider>
//       <h1>React with mid and share is important</h1>
//       <Login />
//       <Profile />
//     </UserContext.Provider>
//   )
// }

// export default App




import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React With Mid And Share Is Important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
