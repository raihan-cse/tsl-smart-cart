import React from 'react'
import MenuWrapper from './navbar/MenuWrapper'
import Header from './Header'
import MobileHeader from '../mobile-header/MobileHeader'

export default function HeaderWrapper() {
    return (
        <>
            <Header />
            <MenuWrapper />
            <MobileHeader />
        </>
    )
}
