import React from 'react'
import Hero from './hero/Hero'
import WholesaleShopping from './wholesale-shopping/WholesaleShopping'
import StoreSelect from './store-selection/StoreSelect'
import BrowseByCategory from './browse-by-category/BrowseByCategory'
import RealState from './real-state/RealState'

export default function Landing() {
    return (
        <div>
            <Hero />
            <WholesaleShopping />
            <StoreSelect />
            <BrowseByCategory />
            <RealState />
        </div>
    )
}
