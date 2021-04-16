import React from 'react';
import HeaderBody from './HeaderBody/HeaderBody';
import Menu from './Navbar/Menu';

const Header = () => {
    return (
        <div>
         <Menu></Menu>
         <HeaderBody/>
        </div>
    );
};

export default Header;