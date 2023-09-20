import React from 'react';
import "./header.css";

// import { SearchIcon} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Header(){
  return (
    <header className="header">
        <div className="header__logo">
            <StorefrontIcon className="header__logoImg" />
            <h2 className="header__logoTitle">eShop</h2>
        </div>
        <div className="header__search">
            <input type="text" className="header__searchInput" placeholder="Search your product..."/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">Hello Guest</span>
                <span className="nav__itemLineTwo">Sign In</span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Shop</span>
            </div>
            <div className="nav__item">
                <ShoppingBasketIcon className='itemBasket'/>
                <span className="nav__itemLineTwo nav__basketCount">0</span>
            </div>
        </div>
    </header>
  )
}


