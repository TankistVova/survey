import React from "react";
import {Switch, Route} from "react-router-dom";
import Interview from "./Pages/Interview";


const Routers =()=> {
    return(
        <>
            <Switch>
                <Route path='/' component={Interview} exact />
                <Route path='/Interview' component={Interview} exact/>
            </Switch>     
        </>
    )
}
export default Routers