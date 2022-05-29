
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/authcontext/AuthActions'
import { AuthContext } from '../../context/authcontext/Authcontext'
import './Right.css'
const Right = ()=>{

    const {token, dispatch} = useContext(AuthContext)
    return(
        <div className="right">
            Hello
            <Link to="/" onClick={()=>dispatch(logout(token))}>
                Log Out
            </Link>
        </div>
    )
}

export default Right