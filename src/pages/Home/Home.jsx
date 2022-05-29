import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Center from "../../components/center/Center"
import Right from "../../components/right/Right"
import Sidebar from "../../components/sidebar/Sidebar"
import './Home.css'
const Home = ()=>{

    const location = useLocation()
    const data = location.state || ""
    console.log(location)
    const [width, setWidth] = useState(false)
    const [center, setCenter] = useState(false)
    const showButton = ()=>{
        if(window.innerWidth<=1200){
            setWidth(true)
        }else{
            setWidth(false)
        }
      }
      const showCenter = ()=>{
        if(window.innerWidth<=710){
            setCenter(true)
        }else{
            setCenter(false)
        }
      }
      
      useEffect(()=>{
        showButton()
        showCenter()
      },[])

      window.addEventListener('resize', showButton)
      window.addEventListener('resize', showCenter)

    return(
        <div className="home">
            <Sidebar/>
            {center?"":<Center data={data}/>}
            {width? "":<Right/>}
        </div>
    )
}

export default Home