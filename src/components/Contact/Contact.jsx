import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"




    export default function Contact ({data, onDelete}) {
   return(
    <>
    <div className={css.contact}>
    <p className={css.item}><IoMdPerson className={css.icon}/>{data.name}</p>
   <p className={css.item}><FaPhoneAlt className={css.icon}/>{data.number}</p>
   </div>
    <button className={css.delete} onClick={()=>{onDelete(data.id)}}>Delete</button>
    </>
   )

}