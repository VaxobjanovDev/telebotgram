import { GiBarStool } from 'react-icons/gi'
import './modal.css'

const Modal = ({setClick})=>{
    return(
        <div className="modal" onClick={()=>setClick(false)}>
            <div className="modal-content">
            <GiBarStool/>
            <span>Username</span>
            dsadsadsadsad
            asdsadsadsa
            </div>
        </div>
    )
}
export default Modal