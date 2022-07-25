import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet.css'

const Home = () => {
  return (
    <div>
        <h6>Hi User! Choose the right option from below list.</h6>
        <div className="card home">
            <ul className="list-group list-group-flush">
                <li className="list-group-item home-list">
                    <Link className="nav-details" to="/createorder">
                        <p style={{margin:'auto'}}>New Order</p>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-details" to="/getorderdetails">
                        <p style={{margin:'auto'}}>Get Details</p>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Home
