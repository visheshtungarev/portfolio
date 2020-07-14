import React,{Suspense, lazy} from "react";
import Consumer from "../Components/HOC/Consumer/";
import {BrowserRouter as Router,
    Switch,
    Route,
    } from 'react-router-dom';
const Home = lazy(()=>import('./Home'))
  
const RouterClass =(props:any)=>{
   
    return(

        <Router>
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Suspense>
    </Router>
        )
    }


export default Consumer(RouterClass);