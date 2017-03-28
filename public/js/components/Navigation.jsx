import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        let { logoutUser } = this.props;
        logoutUser();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.userLogin !== nextProps.userLogin;
    }

    render() {
        let { userLogin } = this.props;

        return (
            <div>
                {
                    (userLogin === '') ?
                        <Breadcrumb>
                            <Breadcrumb.Item >
                                <Link to="/login">
                                    login
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Link to="/signup">
                                    sign up
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb> :
                        <Breadcrumb>
                            <Breadcrumb.Item >
                                <Link to="/notepad">
                                    { userLogin }
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item onClick={ this.handleLogoutClick } >
                                <Link to="/login">
                                    logout
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                }
            </div>
        );
    }
}

Navigation.propTypes = {
    // value: PropTypes.string.isRequired
};

export default Navigation;