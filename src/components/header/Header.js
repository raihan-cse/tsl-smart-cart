import React from 'react'
import ControlWrapper from '../control/ControlWrapper'
import Search from '../search/Search'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="main-header-wrapper">
                <div className="header-logo-box">
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + "assets/img/logo-trns.png"} alt="logo" className="img-fluid" />
                    </Link>
                </div>
                <div className="header-search-box">
                    <Search />
                </div>
                <div className="header-control-box">
                    <ControlWrapper />
                </div>
            </div>
        </>
    )
}
