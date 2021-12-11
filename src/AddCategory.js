import React, { useState } from "react";
import "./AddCategory.css"
import Category from "./Category";


function AddCategory(){
        const [value,setValue] = useState("")
        const [valuee,setValuee] = useState("")


    return (
        <div className = "div1">
               <span>{value}</span>
               <span>{valuee}</span>

               
        <button className= "btn" onClick={() =>{
         setValue(<div id = "box" className= "AddCategory">

             <p className="txt">добавить категория<button className= "btn2" onClick={() =>{
                 setValue("")
             }}>X</button></p>

             <button className="btn3">женский</button>
             <button className="btn3">мужской</button>

             <input className= "inp" placeholder= "категория"/>

             <div className= "div2">
                 <button className="btn5">загрузить<br/>фото</button>
             </div>

             <button className="btn4" onClick ={() =>{

                setValuee(<Category />);

             }}>добавить</button>

             </div>
             
             )

        }}>+</button>
        </div>
    )
}   



export default AddCategory