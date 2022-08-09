import {FC} from "react";
import {useHistory} from "react-router-dom";
import {
    POKERFACE_EXERCISE
} from "../../router/models/Routes";
import "./Menu.scss";
import Footer from "../../structure/footer/Footer";

const Menu: FC = () => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url)
    }

    return (
        <div className="menu">
            <h1 className="menu__title">Exercise Menu</h1>
            <ol className="menu__exercises">
                <li onClick={() => goToUrl(POKERFACE_EXERCISE)}>Pokerface Exercise</li>

            </ol>
            <Footer/>
        </div>
    )
}

export default Menu;
