import React from 'react'
import Search from './Search'

export default function Header() {
    return (
        <>
        <div className="main-header-wrapper">
            <div className="header-logo-box"></div>
            <div className="header-search-box">
            <Search />
            </div>
            <div className="header-control-box"></div>
        </div>
        </>
    )
}
