import React from 'react'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

import './Header.css'


export const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
        <Avatar className="header__avatar"
        alt="Sasha"
        src=""
        />
        <AccessTimeIcon/>
        </div>
        <div className="header__search">
        <SearchIcon/>
        <input type="text" placeholder="search"/></div>
        <div className="header__right"></div>
            <HelpIcon/>
        </div>
    )
}
