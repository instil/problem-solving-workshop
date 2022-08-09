import {FC} from "react";
import "./Navbar.scss";

interface Props {
    pageTitle: string
}

const Navbar: FC<Props> = ({pageTitle}) => {
    return (
        <div className="navbar">
            <h1 className="navbar__page-title">{pageTitle}</h1>
        </div>
    );
};

export default Navbar;
