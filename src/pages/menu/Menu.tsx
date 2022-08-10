import {FC} from "react";
import {useHistory} from "react-router-dom";
import {
    POKERFACE_EXERCISE,
    ERROR_HANDLING_EXERCISE
} from "../../router/models/Routes";
import "./Menu.scss";
import Footer from "../../structure/footer/Footer";
import InstilLogo from "../../structure/ascii-art/InstilLogo";

const Menu: FC = () => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url);
    };

    return (
        <div className="menu">
            <h1 className="menu__title">Exercise Menu</h1>
            <ol className="menu__exercises">
                <li onClick={() => goToUrl(POKERFACE_EXERCISE)}>Pokerface Exercise</li>
                <li onClick={() => goToUrl(ERROR_HANDLING_EXERCISE)}>Error Handling Exercise</li>
            </ol>
            <InstilLogo/>
            <Footer/>
        </div>
    );
};

export default Menu;
