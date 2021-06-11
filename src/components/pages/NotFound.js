import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <div className="not-found-page">
                <div className="content">
                    <h1>Page Not Found</h1>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
