import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialLinks() {
    return (
        <>
            <div className="footer-content-wrapper social">
                <div className="title-wrapper">
                    <h4>Social</h4>
                </div>
                <div className="link-wrapper">
                    <ul>
                        <li>
                            <Link to='/ExternalPage' className="link" target="_blank">Facebook</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link" target="_blank">Twitter</Link>
                        </li>
                        <li>
                            <Link to='/ExternalPage' className="link" target="_blank">YouTube</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
