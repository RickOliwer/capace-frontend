import Nav from "./nav";
import isEmpty from "lodash.isempty"

const Header = ({header, headerMenus, page}) => {
    if( isEmpty(headerMenus)){
        return null;
    }
    return ( 
        <header className="contain">
                <Nav header={header} headerMenus={headerMenus} />
        </header>
    );
}
 
export default Header;