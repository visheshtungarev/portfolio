import React, { useReducer} from 'react';
//context
import AppContext from './ApplicationContext';

//constants
import {themes} from "./ThemeConstants";

const GlobalState = (props:any) => {

    const initialState = {
        theme:themes,
        isLoading:false,
        isLight:false
    }

    const reducer = (state = initialState, action:any) => {
        switch (action.type) {  
            case"loader":{
                return{...state,isLoading:action.payload}
            }
            case "toggleTheme":{
                return{...state,isLight:action.payload}
            }          
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
       <AppContext.Provider value={{
           state:state,
           dispatch:dispatch
       }}>
            {props.children}
       
       </AppContext.Provider>
    )

}

export default GlobalState;



