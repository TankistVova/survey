import React from "react";
import {Switch, Route} from "react-router-dom";
import Beautiful from "./Pages/Beautiful";
import Interview from "./Pages/Interview";


const Routers =()=> {
    return(
        <>
            <Switch>
                <Route path='/' component={Beautiful} exact />
                <Route path='/Beautiful' component={Beautiful} exact/>
                <Route path='/Interview' component={Interview} exact/>
            </Switch>     
        </>
    )
}
export default Routers