import React, { useState } from "react";

// function Category(){
//         const [value, setValue] = useState("")
//         let arr = [],newArr
//         return(
//             <div>

//             <span>{value}</span>
                
//                    () => {arr.push(<div className="div3">jhjhjkge</div>)
                 
//                   newArr = arr.map((el)=> el)
//                   setValue(arr)
//         }
        
              
                 
//              </div>
//         )
//     }


function Category() {
    // const [valuee,setValuee] = useState("")
    let arr = [],newArr
    arr.push(<div className="div3">jhjhjkge</div>);
    newArr = arr.map((el)=> el)

    return(
       newArr
    )
}


export default Category