import {FC} from "react";
import "./NotFound.scss";
import {useHistory} from "react-router-dom";
const image = require("../../assets/pokerface.png");

const NotFound: FC = () => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url)
    }

    return (
        <div className="not-found">
            <div className="not-found__body">
                <img src={image} alt={"dennis-nedry"}/>
                <h1 className="not-found__body__message">Page Not Found!</h1>
                <h1 className="not-found__body__message">Oi, get back to Pokerface!</h1>

                <h1 className="not-found__back-to-exercise" onClick={() => goToUrl("/")}>
                    Back to Exercise
                </h1>
            </div>
        </div>
    )
}

export default NotFound;
