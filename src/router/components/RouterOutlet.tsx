import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "../../pages/not-found/NotFound";
import Pokerface from "../../pages/exercises/pokerface/Pokerface";

const RouterOutlet: FC = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Pokerface}/>
            <Route component={NotFound}/>
        </Switch>
    );

};

export default RouterOutlet;
