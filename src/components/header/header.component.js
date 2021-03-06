import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import './header.component.styles.scss'

export default function Header() {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="shop" className="option">
                    SHOP
                </Link>
                <Link to="contact" className="option">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}
