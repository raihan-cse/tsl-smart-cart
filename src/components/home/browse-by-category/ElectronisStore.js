import React from 'react'
import { Link } from 'react-router-dom'

export default function ElectronisStore() {
    return (
        <>
        <div className="bbc-content-wrapper">
            <h3>Up to 70% off | Electronics clearance store</h3>
            <div className="bbc-img-wrapper">
                <img className="img-fluid" src="https://via.placeholder.com/480x360" alt="banner" />
            </div>
            <div className="see-more-wrapper">
                <Link className="sm-link" to='/ExternalPage'>See more</Link>
            </div>
        </div>
        </>
    )
}
