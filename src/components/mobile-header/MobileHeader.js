import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import FilterMenu from '../header/navbar/FilterMenu'
import MainMenu from '../header/navbar/MainMenu';
import Search from '../search/Search'

export default function MobileHeader() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="mobile-header-wrapper">
                <div className="logo-and-icon">
                    <div className="m-logo-wrapper">
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + "assets/img/logo-trns.png"} alt="logo" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="m-icon-wrapper">
                        <div className={`icon-inner`}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            <div className="line line-one"></div>
                            <div className="line line-two"></div>
                            <div className="line line-three"></div>
                        </div>
                    </div>
                </div>
                <div className="mobile-search-wrapper" >
                    <Search />
                </div>
                <Collapse in={open}>
                    <div className={`mobile-collapse-menu`} id="example-collapse-text">
                        <div className="mobile-main-menu-wrapper">
                            <FilterMenu />
                            <MainMenu />
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    )
}
