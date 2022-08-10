import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "../../pages/not-found/NotFound";
import Pokerface from "../../pages/exercises/pokerface/Pokerface";
import ErrorHandling from "../../pages/exercises/error-handling/ErrorHandling";
import Menu from "../../pages/menu/Menu";
import {ERROR_HANDLING_EXERCISE, POKERFACE_EXERCISE} from "../models/Routes";

const RouterOutlet: FC = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Menu}/>
            <Route exact path={POKERFACE_EXERCISE} component={Pokerface}/>
            <Route exact path={ERROR_HANDLING_EXERCISE} component={ErrorHandling}/>
            <Route component={NotFound}/>
        </Switch>
    );

};

export default RouterOutlet;
