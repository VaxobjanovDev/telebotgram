import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Center from "./components/center/Center"
import './App.css'
import Login from "./pages/login/Login"
import { useContext } from "react"
import { AuthContext } from "./context/authcontext/Authcontext"


const App = ()=>{

    const {token} = useContext(AuthContext)
    
    return(<>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Home/>}/>
                <Route path="/center" element={<Center/>}/>
                <Route path="/login" element={<Login/>}/> */}
                {token ? (
            <Route path="/" element={<Home />} />
          ) : (
              <Route path="/" element={<Navigate replace to="/register"/>} />
          )}
          <Route path="/register">
          {!token ? (
               <Route index element={<Login />}/>
              ) : (
              <Route path="/register" element={<Navigate replace to="/"/>} />
              )}
          </Route>
          {token && (
            <>
              <Route path="/" element={<Home/>} />
              <Route path="/:id" element={<Home/>} />
              <Route path="/center" element={<Center />} />
            </>
          )}
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App