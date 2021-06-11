import React from 'react'
import { Link } from 'react-router-dom'

export default function FilterMenu() {
    const filterMenuData = [
        {
            id: 1,
            title: "All",
            pLink: "/ExternalPage"
        },
        {
            id: 2,
            title: "Weekly Ad",
            pLink: "/ExternalPage"
        },
        {
            id: 3,
            title: "Sell On Smartcart",
            pLink: "/ExternalPage"
        },
        {
            id: 4,
            title: "investor ",
            pLink: "/"
        },
        {
            id: 5,
            title: "factory direct",
            pLink: "/ExternalPage"
        },
        {
            id: 6,
            title: "farmers direct",
            pLink: "/ExternalPage"
        },
        {
            id: 7,
            title: "Export ",
            pLink: "/ExternalPage"
        },
        {
            id: 8,
            title: "Travel/ Ticket",
            pLink: "/ExternalPage"
        }
    ]
    return (
        <>
            <div className="filter-menu-wrapper">
                <div className="filter-left-box">
                    <ul className="filter-menu-items">
                        <li>
                            <Link></Link>
                        </li>
                        {filterMenuData.map((data) =>
                            <li key={data.id}>
                                <Link className="items" to={data.pLink}>{data.title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="filter-right-box">
                    <ul className="filter-menu-items">
                        <li>
                            <Link className="items" to='/ExternalPage'>treasure hunt</Link>
                        </li>
                        <li>
                            <Link className="items" to='/ExternalPage'>Shop super deals</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
