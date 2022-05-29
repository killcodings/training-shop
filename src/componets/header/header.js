import React from 'react';
import HeaderContact from './contact';
import HeaderSocial from './socialNetwork';
import Menu from './menu';
import BlockNavs from './BlockNavs';
import './style.css';

import Logo from './CleverShop.svg';

const Header = function () {
    return (
        <header>
            <div className="topLine ">
                <div className="container ">
                    <div className="row">
                        <HeaderContact/>
                        <HeaderSocial/>
                    </div>
                </div>
            </div>
            <div className="container bottomLine">
                <div className="row">
                    <div className="logoWrap">


                        <img src={Logo} alt=""/>
                    </div>


                    <div className="menuWrap">

                        <Menu/>
                    </div>

                    <div className="NavsWrap">

                        <BlockNavs/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;