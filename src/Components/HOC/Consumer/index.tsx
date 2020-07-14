import React from 'react'
import AppContext from "../../../Common/ApplicationContext";

const Consumer = (WrapComponent: any) => {

    return (props:any) => {

        return (
            <AppContext.Consumer>
                {context => {
                    console.log("this is the context",context)
                    return (
                        <WrapComponent context={context}  {...props} />

                    )
                }}
            </AppContext.Consumer>
        )
    }

}
export default Consumer;