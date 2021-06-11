import React from 'react'
import MenuIcon from './MenuIcon'
import FilterMenu from './FilterMenu'
import MainMenu from './MainMenu'

export default function MenuWrapper() {
    return (
        <>
            <div className="menu-wrapper">
                <MenuIcon />
                <FilterMenu />
                <MainMenu />
            </div>
        </>
    )
}
