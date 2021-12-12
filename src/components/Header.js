import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeLogo from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>

            {/* LOGO CONTAINER */}
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt='logo' />
            </div>

            {/* SEARCH BAR CONTAINER */}
            <div className='searchBarContainer'>
                <div className='searchIcon'>
                    <img src={searchIcon} alt='' />
                </div>
                <input className='searchInput' placeholder='Collection, item or user ... ' type='text' />
            </div>

            {/* HEADER ITEMS */}
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            {/* HEADER ACTIONS */}
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeLogo} alt='' />
                </div>
            </div>

            {/* LOGIN BUTTON */}
            <div className='loginButton'>GET IN </div>

        </div>
    )
}

export default Header
