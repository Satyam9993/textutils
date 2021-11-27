import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutTitle}</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-3">
                           <input className="form-check-input" onClick={props.togglemode_blue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                           <label className={`form-check-label ${props.txtcolor}`} htmlFor="flexSwitchCheckDefault">Sky-Blue Mode</label>
                        </div>
                        <div className="form-check form-switch mx-3">
                           <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                           <label className={`form-check-label ${props.txtcolor}`} htmlFor="flexSwitchCheckDefault">{props.Modetxt}</label>
                        </div>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string
}

Navbar.defaultProps = {
    title : "Satyam",
    aboutTitle : "Satyam"
}