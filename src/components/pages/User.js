import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div className="containerUser">
      
      <div className="sidenav">
{/* /////////////////////////////////////////////////////////////Fixed */}
        <a href="/about">About</a>
        <a href="/about">Services</a>
        <a href="/about">Clients</a>
        <a href="/about">Contact</a>

        <ul>
          <li>
            Versión 1.0.0
          </li>
        </ul>
      </div>

      <div className="second"> 
        <h1>Balance Total <span>0.00</span></h1>
      </div>
    </div>
    )
  }
}
