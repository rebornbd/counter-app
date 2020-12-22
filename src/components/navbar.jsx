import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const { totalCount } = this.props;

        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-dark">{totalCount}</span>
                </a>
            </nav>
        );
    }
}
 
export default Navbar;