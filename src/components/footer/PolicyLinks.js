import React from 'react'
import { Link } from 'react-router-dom'

export default function PolicyLinks() {
    return (
        <>
            <div className="footer-content-wrapper policy">
                <div className="title-wrapper">
                    <h4 className="title">Policy</h4>
                </div>
                <div className="link-wrapper">
                    <ul>
                        <li>
                            <Link to='/ExternalPage' className="link">Return Policy</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Terms of use</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Security</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Privacy</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">Sitemap</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link">EPR Compliance</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
