import React,{ useState } from "react";
//import badge from '../assets/Bag.svg';
export const Header = () => {
    
    const [isNavVisible, setNavVisibility] = useState(true);
    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
      };
      console.log(toggleNav);
    return (
        <div className="navbar">
          <img src="https://i.imgur.com/OaayzOF.png" className="navbar__logo" alt="logo"/>   
          { isNavVisible && (
            <div className="navbar__menu">
            <a href="/" className="navbar__menu--links">Shop all</a>
            <a href="/" className="navbar__menu--links">women</a>
            <a href="/" className="navbar__menu--links">men</a>
            <a href="/" className="navbar__menu--links">about</a>
            <a href="/" className="navbar__menu--icons"><img src="https://i.imgur.com/gJ4wJWb.png" className="navbar__badge" alt="badge"/></a>
            </div>
          )}
          <button onClick={toggleNav} className="navbar__bars"><i className="fas fa-bars"></i></button>
        </div>
    )
}
