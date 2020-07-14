import React from "react";
import Images from "../../assets/img";
import "./index.css"

interface header {
    Heading: String,
    SubHeading?: String,
    title?: String,
    ButtonName?:String,
    OnClick?:()=>void
}
const HeaderComponent = (props: header) => {
    const { Heading, SubHeading, title,ButtonName,OnClick } = props
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={Images.logoWhite} alt="logo" className="header__logo" />
            </div>
            <div className="text-box">

                <h1 className="heading-primary">
                    <span className="heading-primary--sub">{title}</span>
                    <span className="heading-primary--main">{Heading}</span>
                    <span className="heading-primary--sub">{SubHeading}</span>
            </h1>
    <button className="btn btn--white btn--animated" onClick={OnClick}>{ButtonName}</button>
            </div>
        </header>
    )

}
export default HeaderComponent;