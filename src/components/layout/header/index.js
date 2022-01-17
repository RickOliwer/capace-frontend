import Nav from "./nav";
import {isEmpty} from 'lodash'

const Header = ({header, headerMenus}) => {
    if( isEmpty(headerMenus)){
        return null;
    }

    return ( 
        <header id="front" className="w-full">
                <Nav header={header} headerMenus={headerMenus} />
        </header>
    );
}
 
export default Header;