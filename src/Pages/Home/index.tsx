import React from "react"
import Header from "../../Components/Header";
const Home =(props:any)=>{
return(
    <div>
        <Header 
        ButtonName="Discover" 
        OnClick={()=>{
            alert("button pressed")
        }} 
        title="Hello World! I am" 
        SubHeading="A Mobile and WEB Developer" 
        Heading=" Vishesh Tungare."/>
    </div>
)
}

export default Home;