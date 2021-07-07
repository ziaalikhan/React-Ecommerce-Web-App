import React from "react";
import "./Header.css";
import appLogo from "../images/appLogo.png";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../config/StateProvider";
import {auth} from '../config/firebase';

function Header() {

const [{basket, user}, dispatch] = useStateValue();


const handleAuthentication = () => {
  if (user) {
    auth.signOut();
  }
}

  return (
    <div className="header">
      {/* HeaderLogo Start */}
      <Link to='/'>
      <img className="header_logo" src={appLogo} alt="Logo" />
      </Link>

      {/* HeaderLogo End */}

      {/* Header Search start */}
      <div className="header_search">
        <input type="text" placeholder='Search Here' className="header_searchInput" />
        <SearchIcon className='search_icon' />
      </div>
      {/* Header Search End */}

      {/* Header Nav start */}

      <div className="header_nav">
      <Link to={!user && './login'}>
        <div
        onClick={handleAuthentication}
        className="header_option">
            <span className="header_optionLineOne">Hello : {user ? user?.email  : 'Guest'}</span>
            
            
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
           
        </div>
        </Link>
        <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>

        </div>
        <Link to='/checkout'>
        
        <div className="header_optionbasket">
        <AddShoppingCartIcon  />
        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        
        </Link>


      </div>

      {/* Header Nav end */}
    </div>
  );
}

export default Header;
