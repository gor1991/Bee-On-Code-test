import React from "react";
import "./Header.css";



class Header extends React.Component{
    render() {
        return(
            <div  className = "App">
            
                <input type = "text" className = "Header" placeholder ="Поиск" />
            </div>
        )
    }
}


export default Header