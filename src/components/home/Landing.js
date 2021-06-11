import React from 'react'
import Hero from './hero/Hero'
import WholesaleShopping from './wholesale-shopping/WholesaleShopping'
import StoreSelect from './store-selection/StoreSelect'

export default function Landing() {
    return (
        <div>
            <Hero />
            <WholesaleShopping />
            <StoreSelect />
        </div>
    )
}
